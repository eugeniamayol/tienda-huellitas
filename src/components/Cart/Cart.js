import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useState } from "react"
import { Resumen } from "../Resumen/Resumen.js"
import './Cart.css';
import { Link } from "react-router-dom";

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
       
        orden.buyer = dataForm
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

        // actualizar stock
        const queryCollection = collection(db, 'items')

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

                 </div>
            ))}
                        <h5 className="text-center m-5">El total a pagar es de ${total()}</h5>
                        <form className="formulario"
                            onSubmit={realizarCompra} 
                        >
                            <input className="form-control"
                                type='text' 
                                name='name' 
                                placeholder='Nombre Completo' 
                                onChange={handleChange}
                                value={dataForm.name}
                            /><br />
                            <input className="form-control"
                                type='number' 
                                name='phone'
                                placeholder='Teléfono' 
                                onChange={handleChange}
                                value={dataForm.phone}
                            /><br/>
                            <input className="form-control"
                                type='email' 
                                name='email'
                                placeholder='Email' 
                                onChange={handleChange}
                                value={dataForm.email}
                            /><br/>
                            <button className="btn btn-success m-5">Generar Orden</button>
                            <button onClick={vaciarCarrito} className="btn btn-danger m-5">Vaciar Carrito</button> 
                            <Link to='/' className="btn btn-light mb-5">Volver</Link>
                        </form>
                    </>

            }          
        </div>
    )
}
