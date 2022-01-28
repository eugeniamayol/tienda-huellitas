import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import { useState, useEffect }  from 'react'; 
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export const ItemListContainer = ({greeting}) => {
const [ productos, setProductos ] = useState ([])
const [ cargando, setCargando ] = useState(true)

const { idCategoria } = useParams()

useEffect(() =>{
    if (idCategoria){
        const db = getFirestore()
        const queryCollection = query(collection(db, 'items'),
        where('categories', '==', idCategoria));
        getDocs(queryCollection)
            .then(res => setProductos(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => err)
            .finally(()=> setCargando(false))
    }else{
        const db = getFirestore()
        const queryCollection = collection(db, 'items');
        getDocs(queryCollection)
            .then(res => setProductos(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => err)
            .finally(()=> setCargando(false))
    }
 }, [idCategoria])

    console.log(productos)
    return(
        <div className="contenedor container my-5">
            <h1 className="titulo">{greeting}</h1>
            <ItemList items={productos} cargando={cargando}/>
        </div>
                   
        
    )
}