import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Categoies
          </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onclick="openMenu()">
              &#9776;
        </button>
            <a href="index.html">YourCart</a>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">SignIn</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3> Shopping Categories</h3>
          <button className="sidebar-close-button" onclick="closeMenu()"> X</button>
          <ul>
            <li>
              <a href="pants.html"> Pants</a>
            </li>
            <li>
              <a href="pants.html"> Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <ul className="products" >
              <li>
                <div className="product">
                  <img className="product-image" src="/images/d1.jpg" alt="T-shirt">
                    <div className="product-name">
                      <a href="shrit.html">Slim Shirt</a>
                    </div>
                    <div className="product-brand">AdiDas</div>
                    <div className="product-price " style="font-weight: bolder; font-size: 2rem; color: crimson;">$12</div>
            </div>
          </li>
     
        </ul>
        
      </div>
    </main>
          <footer className="footer">
            ALL RIGHTS RESERVED 2019-2020 COPYRIGHT
    </footer>
  </div>
  );
}

export default App;
