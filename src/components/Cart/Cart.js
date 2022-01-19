import { useCartContext } from "../../context/CartContext";
import './Cart.css';

export const Cart = () => {
  const { cartList, vaciarCarrito } = useCartContext()
    return (
      <div>
          {
            cartList.map(prod => 
              <div key={prod.id} className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-2">
                    <img src={prod.photo} className="card-img tamañoImg" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{prod.name}</h5>
                      <p className="card-text"><small className="text-muted">Cantidad {prod.cantidad}</small></p>
                    </div>
                  </div>
                </div>
              </div>         
              )}
            <button onClick={vaciarCarrito} className="btn btn-light">Vaciar carrito</button>
      </div>
    );
  };
  