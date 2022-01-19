import { createContext, useContext, useState } from 'react';

export const CartContext = createContext([]);

export function useCartContext () {
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) =>{
    const [ cartList, setcartList ] = useState([]) 

    function agregarAlCarrito (items) {

        const indice = cartList.findIndex(i => i.id === items.id)

        if (indice > -1){
            const cantidadAnterior = cartList[indice].cantidad
            
            let cantidadNueva = cantidadAnterior + items.cantidad

            cartList[indice].cantidad = cantidadNueva

            let arrAux = [...cartList]
            setcartList(arrAux)
        }else{
            setcartList( [...cartList, items] )
        }        
    }

    function vaciarCarrito () {
        setcartList( [] )
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
            }}>
            {children}
        </CartContext.Provider>
    )
}