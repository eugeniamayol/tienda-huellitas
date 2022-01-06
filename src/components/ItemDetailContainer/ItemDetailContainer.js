import {ItemDetail} from '../ItemDetail/ItemDetail.js';
import { useEffect, useState } from "react";
import { traerProductos } from '../../helpers/mocks';

export const ItemDetailContainer = () => {
  const [ producto, setProducto ] = useState ({})

  useEffect(() =>{
    traerProductos
        .then(res => setProducto(res.find(prod => prod.id === "100")))
        .catch(err => console.log (err))
}, [])

  return (
    <div className="itemDetailContainer">
      <ItemDetail producto={producto}/>
    </div>
  );
}
