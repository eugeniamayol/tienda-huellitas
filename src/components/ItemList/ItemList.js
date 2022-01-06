import { Item } from '../Item/Item.js';
import './ItemList.css';

export const ItemList = ({items, cargando}) => {
    return(
        <div className="contenedorItemList">
        { cargando ? <div className="cargando"/> : items.map(items => <Item item={items} key={items.id}/>
             )
         }
         </div>
    )
}