import './Item.css';

export const Item = ({item}) => {
    return(
        <div className="card text-center">
            <h4 className="card-header text-uppercase">{item.name}</h4>
            <div className="card-body">
                <img src={item.photo} className="card-img-top imgCard" alt="..."/>
                <p className="card-text">Precio ${item.price}</p>
                <a href="ItemDetail.js" className="btn btn-primary">Ver más</a>
            </div>
            <div className="card-footer text-muted">Stock disponible: {item.stock}</div>
      </div>
    )
}

