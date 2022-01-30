import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useState } from "react"
import { Resumen } from "../Resumen/Resumen.js"
import './Cart.css';

export const Cart = () => {
    const { cartList, vaciarCarrito, eliminarId, total } = useCartContext ()
    const [condicional, setCondicional] = useState(false);
    const [dataForm , setDataForm ] = useState({
        email: '',
        name: '',
        phone: ''
    });
    const [idOrden, setIdOrden] = useState('');

    const realizarCompra = async (e) => {
        e.preventDefault()   
         // Nuevo objeto de orders    
        let orden = {}
        //orden.date = Timestamp.fromDate(new Date())        

        orden.buyer = dataForm // {name, email, phone}
        orden.total = total();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.price * cartItem.cantidad;
            const cantidad = cartItem.cantidad
            
            return {id, nombre, precio, cantidad}   
        }) 

        // guardar la orden en firestore
        const db = getFirestore()

        const ordenCollection = collection(db, 'ordenes')
        await addDoc(ordenCollection, orden) // setDoc
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))
        //.finally(() => console.log('cargando'))

        // actualizar stock
        const queryCollection = collection(db, 'items')

        //console.log(cleccionNoti)
        const queryActulizarStock = query(
            queryCollection, 
            where( documentId() , 'in', cartList.map(it => it.id))          
        ) 

        const batch = writeBatch(db)       
        
        await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            }) 
        ))
        .catch(err => console.log(err))
        .finally(()=> console.log('stock actualizado'))

        batch.commit()
        setCondicional(true)    
    }

    function handleChange(e) {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    console.log(dataForm)
    
    return (
        <div>  
            {
                condicional  ? 
                    <Resumen idOrden={idOrden} />
                : 
                    <>
                                    {cartList.map( (prod) => (
                 <div className="contenedor">
                   <div key={prod.id} className="mt-5 d-flex flex-row justify-content-around align-items-center">
                    <img src={prod.photo} className="card-img tamañoImg" alt="..."/>
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text">Cantidad {prod.cantidad}</p>
                    <h5 className="card-title">Precio unitario: $ {prod.price}</h5>
                    
                    <button onClick={()=>eliminarId(prod.id)} className="btn btn-light">X</button>
                   </div>  

                   <h5 className="text-center">El total a pagar es de ${total()}</h5>
                 </div>
            ))}

                        <button onClick={vaciarCarrito} className="btn btn-danger text-center">Vaciar Carrito</button>
                        <form className="formulario"
                            onSubmit={realizarCompra} 
                            //onChange={handleChange} 
                        >
                            <input 
                                type='text' 
                                name='name' 
                                placeholder='name' 
                                onChange={handleChange}
                                value={dataForm.name}
                            /><br />
                            <input 
                                type='text' 
                                name='phone'
                                placeholder='tel' 
                                onChange={handleChange}
                                value={dataForm.phone}
                            /><br/>
                            <input 
                                type='email' 
                                name='email'
                                placeholder='email' 
                                onChange={handleChange}
                                value={dataForm.email}
                            /><br/>
                            <button className="btn btn-success mt-5">Generar Orden</button>
                        </form>
                        {/* <button onClick={realizarCompra}>Generar Orden</button> */}
                    </>

            }          
        </div>
    )
}
