import { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({stock, onAdd}) =>{
const [contador, setContador] = useState(1) 

const aumentaContador = () => {
    contador < stock && setContador(contador + 1);   
} 

const disminuyeContador = () => {
    contador > 0 && setContador(contador - 1);
}

return(
        <div className="contenedorContador">
            <button className="btn btn-info botonColor" onClick={disminuyeContador}>-</button>
            <h3>{contador}</h3>
            <button className="btn btn-info botonColor" onClick={aumentaContador}>+</button>
            <button className="btn btn-light" onClick={()=>onAdd(contador)}>Agregar al carrito</button>
        </div>
    )
}