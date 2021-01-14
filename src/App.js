import React , {useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Carrito from './components/Carrito/Carrito';
import Cervezas from './components/Productos/Cervezas';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './components/Context/Context';
import {getFirestore} from './firebase';

function App() {
  
  useEffect(() => {
    const db = getFirestore()
    const itemsColecction = db.collection("items")
    //Para crear filtros por UNO SOLO -->
    const query = itemsColecction.where("category", "==", 2) 
    query.get()
    .then((resultado) => {
      resultado.docs.forEach((doc)=>{
        console.log(doc.id)
        console.log(doc.data())
      })
    })
    .catch((err)=>{
      console.log(err)
    })

    //Pedido en "crudo" -->
    /* const query = itemsColecction.get()

    query.then((resultado) => {
      resultado.docs.forEach((doc)=>{
        console.log(doc.id)
        console.log(doc.data())
      })
    })
    .catch((err)=>{
      console.log(err)
    }) */
  })



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