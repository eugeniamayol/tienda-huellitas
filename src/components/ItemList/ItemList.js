import { Item } from '../Item/Item.js';
import './ItemList.css';
import { useState, useEffect }  from 'react'; 
import { traerProductos } from '../../helpers/mocks';

export const ItemList = ({items}) => {
const [ productos, setProductos ] = useState ([])
const [ cargando, setCargando ] = useState(true)

useEffect(() =>{
    traerProductos
        .then(res => setProductos(res))
        .catch(err => console.log (err))
        .finally(()=> setCargando(false))
}, [])

    return(
        <div className="contenedorItemList">
        { cargando ? <div className="cargando"/> : productos.map(items => <Item item={items}/>
             )
         }
         </div>
    )
}