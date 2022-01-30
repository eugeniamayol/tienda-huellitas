import React from 'react';

export const Resumen = ( {idOrden} ) =>  {
  return <div className='text-center mt-5'>
     <p>Su compra ha sido exitosa</p>
     <p>El id de la orden generada es:  {idOrden}</p>
     <p>A la brevedad lo contactaremos</p>
  </div>;
}

