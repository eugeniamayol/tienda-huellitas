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

    function eliminarId (id) {
        const itemFiltrado = cartList.filter((prod) => prod.id !== id);
        setcartList (itemFiltrado)
    }

    function vaciarCarrito () {
        setcartList( [] )
    }

    function total () {
        let count = 0;
        cartList.forEach((producto) => {
            count += producto.price * producto.cantidad;
        });
        return count;
    };


    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            eliminarId,
            total
            }}>
            {children}
        </CartContext.Provider>
    )
}