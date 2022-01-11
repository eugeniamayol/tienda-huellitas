import { NavBar } from './components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.js';
import { Cart } from './components/Cart/Cart.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting={"Tienda de accesorios para mascotas"}/>}/>
          <Route exact path='/categoria/:idCategoria' element={<ItemListContainer greeting={"Tienda de accesorios para mascotas"}/>}/>
          <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>}/>
          <Route exact path='/carrito' element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
