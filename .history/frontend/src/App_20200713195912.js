import React from 'react';
import data from './data';
import './App.css';
im

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
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
      <button className="sidebar-close-button" onClick={closeMenu}> X</button>
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
      <Route path="/product/:id" component={ProductScreen}/ >
        <Route path="/"  exact ={true} component={HomeScreen}/ >
        <ul className="products" >
         {
            data.products.map( product =>  <li>
              <div className="product">
                <img className="product-image" src={product.image} alt="T-shirt"></img>
                <div className="product-name">
            <a  href="shrit.html">{product.name}</a>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price " >{product.price}</div>
          </div>
            </li>)
         }
     
        </ul>
        
      </div>
    </main>
    <footer className="footer">
      ALL RIGHTS RESERVED 2019-2020 COPYRIGHT
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
