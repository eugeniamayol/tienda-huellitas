import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './CartWidget.css';

export const CartWidget = () => {
    const { cartList } = useCartContext()

    const totalProductos = cartList.reduce(
        (counter, item) => counter + item.cantidad,
        0
      );

    return(
        <div>
            {cartList.length !== 0 ? (
                    <div className="contenedorCartWidget">
                        <Link to="/carrito">  
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="6" cy="19" r="2" />
                                <circle cx="17" cy="19" r="2" />
                                <path d="M17 17h-11v-14h-2" />
                                <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                                <path d="M15 6h6m-3 -3v6" />
                            </svg>
                        </Link>
                        <p className="cantidadCarrito">{totalProductos}</p>
                    </div>
                ) : (
                    <Link to="/cart">
                    
                    </Link>
                )}
        </div>
      );
    };
           
      