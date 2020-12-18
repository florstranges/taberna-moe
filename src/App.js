import './components/Navbar/Navbar.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Footer from './components/Footer/Footer';


function App() {
  
  let stock = 10

  const handleAdd = (contador) => {
    if (contador <= stock){
      alert (`Agregaste ${contador} items`)
    }
  }


  return (
    <>
    <Navbar />
    <ItemListContainer saludo="¡Bienvenido a mi Taberna!" />
    <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
    <Footer />
    </>
  );
}

export default App;

