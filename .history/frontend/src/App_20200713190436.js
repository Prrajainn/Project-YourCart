import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu () = > 
  return (
    
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
              <img className="product-image" src="/images/d1.jpg" alt="T-shirt"></img>
              <div className="product-name">
                <a  href="shrit.html">Slim Shirt</a>
              </div>
              <div className="product-brand">AdiDas</div>
              <div className="product-price " >$12</div>
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
