import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import { useState, useEffect }  from 'react'; 
import { traerProductos } from '../../helpers/mocks';

export const ItemListContainer = ({greeting}) => {
const [ productos, setProductos ] = useState ([])
const [ cargando, setCargando ] = useState(true)

useEffect(() =>{
    traerProductos
        .then(res => setProductos(res))
        .catch(err => console.log (err))
        .finally(()=> setCargando(false))
}, [])

    return(
        <div className="contenedor container my-5">
            <h1 className="titulo">{greeting}</h1>
            <ItemList items={productos} cargando={cargando}/>
        </div>
                   
        
    )
}