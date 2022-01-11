import {ItemDetail} from '../ItemDetail/ItemDetail.js';
import { useEffect, useState } from "react";
import { traerProductos } from '../../helpers/mocks';
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [ producto, setProducto ] = useState ({})

  const { idDetalle } = useParams();

  useEffect(() =>{
    traerProductos
        .then(res => setProducto(res.find(prod => prod.id === idDetalle)))
        .catch(err => console.log (err))
}, [idDetalle])

  return (
    <div className="itemDetailContainer">
      <ItemDetail producto={producto}/>
    </div>
  );
}
