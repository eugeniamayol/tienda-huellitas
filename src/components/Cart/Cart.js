import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import './Cart.css';

export const Cart = () => {
  const { cartList, vaciarCarrito, eliminarId, total } = useCartContext()
    return (
      <>
          {cartList.length === 0 ? (
              <div className="contenedorCarritoVacio">
                <h2>Aún no agregaste nada</h2>
                <Link to="/" className="btn btn-dark">Ir al catálogo</Link>
              </div>
            ) : (
              
              <>
            
            {cartList.map( (prod) => (
                 <div className="contenedor">
                   <div key={prod.id} className="mt-5 d-flex flex-row justify-content-around align-items-center">
                    <img src={prod.photo} className="card-img tamañoImg" alt="..."/>
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text">Cantidad {prod.cantidad}</p>
                    <h5 className="card-title">Precio unitario: $ {prod.price}</h5>
                    
                    <button onClick={()=>eliminarId(prod.id)} className="btn btn-light">X</button>
                   </div>  
                 </div>
            ))}
            <button onClick={vaciarCarrito} className="btn btn-danger m-5">Vaciar carrito</button>
            <button className="btn btn-success m-5">Pagar: $ {total()}</button>
            </>
          )}
        </>
    );
  };
  