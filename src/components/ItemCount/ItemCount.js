import { useState } from 'react';
import swal from 'sweetalert';
import './ItemCount.css';

export const ItemCount = ({stock, inicial}) =>{
const [contador, setContador] = useState(inicial) 

const aumentaContador = () => {
    contador < stock && setContador(contador + 1);   
} 

const disminuyeContador = () => {
    contador > 0 && setContador(contador - 1);
}

const onAdd = () => {
    const cantidad = contador;

    if (contador >= 1){
        swal({
            title: "Felicitaciones",
            text: `Añadiste ${cantidad} productos al carrito`,
            icon: "success",
            button: "Aceptar"
        })
    }else{
        swal({
            title: "Ups",
            text: "No hay productos para agregar",
            icon: "error",
            button: "Volver"
        })
    }
    
}

return(
        <div className="contenedorContador">
            <button className="btn btn-info" onClick={disminuyeContador}>-</button>
            <h3>{contador}</h3>
            <button className="btn btn-info" onClick={aumentaContador}>+</button>
            <button className="btn btn-light" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}