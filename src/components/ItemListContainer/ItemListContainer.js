import './ItemListContainer.css';

export const ItemListContainer = ({greeting}) => {
    return(
        <div className="contenedor container my-5">
            <h1 className="titulo">{greeting}</h1>
        </div>

    )
}