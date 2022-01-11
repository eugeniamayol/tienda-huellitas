import "./ItemDetail.css";
import { ItemCount } from '../ItemCount/ItemCount.js';

export const ItemDetail = ({ producto }) => {

  return (
    <section className="containerDetail">
      <div className="imgDetail">
        <img src={producto.photo} alt=""/>
      </div>

      <div className="descriptionDetail">
        <h3>{producto.name}</h3>
        <p>{producto.description}</p>
        <h4>Precio: ${producto.price}</h4>
        <h5>Stock: {producto.stock} disponibles</h5>
        <ItemCount stock={producto.stock} inicial={1}/>
      </div>
    </section>
  );
};
