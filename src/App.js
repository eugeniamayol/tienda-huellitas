import { NavBar } from './components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Tienda de accesorios para mascotas"}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
