import {ItemDetail} from '../ItemDetail/ItemDetail.js';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc } from 'firebase/firestore';


export const ItemDetailContainer = () => {
  const [ producto, setProducto ] = useState ({})

  const { idDetalle } = useParams();

  useEffect(()=>{
      const db = getFirestore()
      const queryProd = doc(db, 'items', idDetalle)
      getDoc(queryProd)
      .then(resp => setProducto( {id: resp.id, ...resp.data()} ))
  }, [idDetalle])


  return (
    <div className="itemDetailContainer">
      <ItemDetail producto={producto}/>
    </div>
  );
}
