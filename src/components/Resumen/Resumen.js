import React from 'react';
import { Link } from 'react-router-dom';

export const Resumen = ( {idOrden} ) =>  {
  return <div className='text-center mt-5'>
     <p className='text-uppercase font-weight-bold'>Su compra ha sido exitosa</p>
     <p>El id de la orden generada es:  {idOrden}</p>
     <p>A la brevedad lo contactaremos</p>
     <Link to='/' className="btn btn-success">Volver a la tienda</Link>
  </div>;
}

