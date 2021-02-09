import React , {useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Carrito from './components/Carrito/Carrito';
import Cervezas from './components/Productos/Cervezas';
import Vodka from './components/Productos/Vodka';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './components/Context/Context';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';


function App() {
  

  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path='/' exact>
          <Home />
          <ItemListContainer/>
        </Route>

        <Route path='/cervezas'>
          <Cervezas />
        </Route>

        <Route path='/vodka'>
          <Vodka />
        </Route>

        <Route path="/category/:id">
          <ItemListContainer/> 
        </Route>

        <Route path="/item/:id">
          <ItemDetailContainer/>
        </Route>

        <Route path="/checkout">
            <Checkout />
        </Route>

        <Route path='/carrito'>
          <Carrito />
        </Route>
        
      </Switch>
      
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;