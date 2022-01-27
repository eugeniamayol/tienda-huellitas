import {ItemDetail} from '../ItemDetail/ItemDetail.js';
import { useEffect, useState } from "react";
import { traerProductos } from '../../helpers/mocks';
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc, where } from 'firebase/firestore';


export const ItemDetailContainer = () => {
  const [ producto, setProducto ] = useState ({})

  const { idDetalle } = useParams();

  useEffect(() =>{
    if(idDetalle){
      const db = getFirestore()
      const queryProd = doc((db, 'items', 'id'),
      where('id', '==', idDetalle));
      getDoc(queryProd)
          .then(res => {setProducto( { id: res.id, ...res.data() } )});
          }

    // traerProductos
    //     .then(res => setProducto(res.find(prod => prod.id === idDetalle)))
    //     .catch(err => console.log (err))
}, [idDetalle])

  return (
    <div className="itemDetailContainer">
      <ItemDetail producto={producto}/>
    </div>
  );
}
