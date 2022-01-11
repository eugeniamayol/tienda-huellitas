import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return(
      <div className="bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-light container">
          <Link to='/'>
            <img className="logo" src="../logo.png" alt="logo"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to='/' className="nav-link">Tienda</Link>
              </li>
              <li className="nav-item">
                <Link to={`/categoria/casitas`} className="nav-link">Casitas</Link>
              </li>
              <li className="nav-item">
                <Link to={`/categoria/collares`} className="nav-link">Collares</Link>
              </li>
              <li className="nav-item">
                <Link to={`/categoria/comederos`} className="nav-link">Comederos</Link>
              </li>
            </ul>
          </div>
          <Link to='/carrito'>
            <CartWidget/>
          </Link>
        </nav>
      </div>
    )
}



