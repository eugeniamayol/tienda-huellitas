import { NavBar } from './components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Tienda de accesorios para mascotas"}/>
    </div>
  );
}

export default App;
