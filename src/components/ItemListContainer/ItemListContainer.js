import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import { useState, useEffect }  from 'react'; 
import { traerProductos } from '../../helpers/mocks';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {
const [ productos, setProductos ] = useState ([])
const [ cargando, setCargando ] = useState(true)

const { idCategoria } = useParams()

useEffect(() =>{
    if (idCategoria){
        traerProductos
        .then(res => setProductos(res.filter( prod => prod.categories === idCategoria)))
        .catch(err => console.log (err))
        .finally(()=> setCargando(false))
    }else{
        traerProductos
        .then(res => setProductos(res))
        .catch(err => console.log (err))
        .finally(()=> setCargando(false))
}
    }, [idCategoria])

    return(
        <div className="contenedor container my-5">
            <h1 className="titulo">{greeting}</h1>
            <ItemList items={productos} cargando={cargando}/>
        </div>
                   
        
    )
}