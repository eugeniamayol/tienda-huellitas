import "./ItemDetail.css";
import { ItemCount } from '../ItemCount/ItemCount.js';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const ItemDetail = ({ producto }) => {

  const { cartList, agregarAlCarrito } = useCartContext()

  const [ mostrar, setMostrar ] = useState(true)

  console.log(cartList)

  const onAdd = (cant) => {
    setMostrar(false)
    console.log(cant)
    agregarAlCarrito({...producto, cantidad: cant})
    
  }

  return (
    <section className="containerDetail">
      <div className="containerImgDetail">
        <img className="imgDetail" src={producto.photo} alt=""/>
      </div>

      <div className="descriptionDetail">
        <h2 className="descriptionName">{producto.name}</h2>
        <p>{producto.description}</p>
        <h4>${producto.price}</h4>
        <h5 className="mb-3" >Disponibles: {producto.stock}</h5>

        { mostrar ? <ItemCount stock={producto.stock} onAdd={onAdd}/> : 
          <div>
            <Link to='/carrito'><button className="btn btn-light m-3">Terminar compra</button></Link>
            <Link to='/'><button className="btn btn-light m-3">Seguir comprando</button></Link>
          </div>
          }
      </div>
    </section>
  );
};
