import React from 'react';
import {BrowserRouter,Route ,Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

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
        <Link to="/">YourCart</Link> 
  
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
        <Route path="/cart/"> </Route>
        <Route path="/"  exact ={true} component={HomeScreen}/ >
        
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
