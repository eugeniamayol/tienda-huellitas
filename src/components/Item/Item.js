import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({item}) => {
    return(
        <div className="card text-center">
            <h4 className="card-header text-uppercase colorTarjeta">{item.name}</h4>
            <div className="card-body">
                <img src={item.photo} className="card-img-top imgCard" alt="..."/>
                <h5 className="card-text mb-3">${item.price}</h5>
                <Link to={`/detalle/${item.id}`} className="btn btn-outline-secondary">Ver más</Link>
            </div>
            <div className="card-footer text-muted colorTarjeta">Stock disponible: {item.stock}</div>
      </div>
    )
}

