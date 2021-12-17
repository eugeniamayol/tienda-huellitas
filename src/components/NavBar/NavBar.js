import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget.js';

export const NavBar = () => {
    return(
      <div className="bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-light container">
          <a className="navbar-brand" href="*">
            <img className="logo" src="../logo.png" alt="logo"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="*">Tienda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="*">Casitas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="*">Collares</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="*">Comederos</a>
              </li>
            </ul>
          </div>
          <CartWidget/>
        </nav>
      </div>
    )
}



