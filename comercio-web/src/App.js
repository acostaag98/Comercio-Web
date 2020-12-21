import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import About from './components/About';
import Contact from './components/Contact';
import Form from './components/Form';
import Cart from './components/Cart'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import CartProvider from './context/CartContext';
import './components/estilos.css'



function App() {
  return (
  <CartProvider defaultCart={[]}>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path='/'>
              <ItemListContainer/>
            </Route>
            <Route exact path='/category/:category'>
              <ItemListContainer />
            </Route>
            <Route exact path='/item/:id'>
              <ItemDetailContainer />
            </Route>
            <Route exat path='/cart'>
              <Cart />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route exact path='/form'>
              <Form />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>

 
  );
}

export default App;
