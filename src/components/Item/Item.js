import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({item}) => {
    return(
        <div className="card text-center">
            <h4 className="card-header text-uppercase">{item.name}</h4>
            <div className="card-body">
                <img src={item.photo} className="card-img-top imgCard" alt="..."/>
                <p className="card-text">Precio ${item.price}</p>
                <Link to={`/detalle/${item.id}`} className="btn btn-primary">Ver más</Link>
            </div>
            <div className="card-footer text-muted">Stock disponible: {item.stock}</div>
      </div>
    )
}

