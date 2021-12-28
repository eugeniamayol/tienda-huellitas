import './ItemListContainer.css';
import { ItemCount } from '../ItemCount/ItemCount.js';

import { ItemList } from '../ItemList/ItemList';


export const ItemListContainer = ({greeting}) => {
    return(
        <div className="contenedor container my-5">
            <h1 className="titulo">{greeting}</h1>
            <ItemList/>
        
        <div className="mt-5">
            <ItemCount stock={5} inicial={1}/>
        </div>

 
        </div>
                   
        
    )
}