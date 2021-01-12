import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Carrito from './components/Carrito/Carrito';
import Cervezas from './components/Productos/Cervezas';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './components/Context/Context';

function App() {
  
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path='/' exact>
          <ItemListContainer />
        </Route>

        <Route path='/cervezas'>
          <Cervezas />
        </Route>

        <Route path="/category/:id">
          <ItemListContainer/> 
        </Route>

        <Route path="/item/:id">
          <ItemDetailContainer/>
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