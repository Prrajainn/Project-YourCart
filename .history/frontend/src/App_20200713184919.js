import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div class="grid-container">
    <header class="header">
      <div class="brand">
        <button onclick="openMenu()">
          &#9776;
        </button>
        <a href="index.html">YourCart</a>
      </div>
      <div class="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">SignIn</a>
      </div>
    </header>
    <aside class="sidebar">
      <h3> Shopping Categories</h3>
      <button class="sidebar-close-button" onclick="closeMenu()"> X</button>
    <ul>
      <li>
        <a href="pants.html"> Pants</a>
      </li>
      <li>
        <a href="pants.html"> Shirts</a>
      </li>
    </ul> 
    </aside>
    <main class="main">
      <div class="content">
        <ul class="products" >
          <li>
            <div class="product">
              <img class="product-image" src="/imagess/d1.jpg" alt="T-shirt">
              <div class="product-name">
                <a  href="shrit.html">Slim Shirt</a>
              </div>
              <div class="product-brand">AdiDas</div>
              <div class="product-price " style="font-weight: bolder; font-size: 2rem; color: crimson;">$12</div>
            </div>
          </li>
     
        </ul>
        
      </div>
    </main>
    <footer class="footer">
      ALL RIGHTS RESERVED 2019-2020 COPYRIGHT
    </footer>
  </div>
  );
}

export default App;
