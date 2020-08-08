import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav Class="navbar navbar-expand-lg navbar-light bg-light">
    <a Class="navbar-brand" href="#">Navbar</a>
    <button Class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span Class="navbar-toggler-icon"></span>
    </button>

    <div Class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul Class="navbar-nav mr-auto">
        <li Class="nav-item active">
          <a Class="nav-link" href="#">Home <span Class="sr-only">(current)</span></a>
        </li>
        <li Class="nav-item">
          <a Class="nav-link" href="#">Link</a>
        </li>
        <li Class="nav-item dropdown">
          <a Class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Categoies
          </a>
          <div Class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a Class="dropdown-item" href="#">Action</a>
            <a Class="dropdown-item" href="#">Another action</a>
            <div Class="dropdown-divider"></div>
            <a Class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li Class="nav-item">
          <a Class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form Class="form-inline my-2 my-lg-0">
        <input Class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button Class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <div Class="grid-container">
    <header Class="header">
      <div Class="brand">
        <button onclick="openMenu()">
          &#9776;
        </button>
        <a href="index.html">YourCart</a>
      </div>
      <div Class="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">SignIn</a>
      </div>
    </header>
    <aside Class="sidebar">
      <h3> Shopping Categories</h3>
      <button Class="sidebar-close-button" onclick="closeMenu()"> X</button>
    <ul>
      <li>
        <a href="pants.html"> Pants</a>
      </li>
      <li>
        <a href="pants.html"> Shirts</a>
      </li>
    </ul> 
    </aside>
    <main Class="main">
      <div Class="content">
        <ul Class="products" >
          <li>
            <div Class="product">
              <img Class="product-image" src="/imagess/d1.jpg" alt="T-shirt">
              <div Class="product-name">
                <a  href="shrit.html">Slim Shirt</a>
              </div>
              <div Class="product-brand">AdiDas</div>
              <div Class="product-price " style="font-weight: bolder; font-size: 2rem; color: crimson;">$12</div>
            </div>
          </li>
     
        </ul>
        
      </div>
    </main>
    <footer Class="footer">
      ALL RIGHTS RESERVED 2019-2020 COPYRIGHT
    </footer>
  </div>
  );
}

export default App;
