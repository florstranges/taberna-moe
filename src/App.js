import './components/Navbar/Navbar.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
    <Navbar />
    <ItemListContainer saludo="¡Bienvenido a mi Taberna!" />
    <ItemCount stock={10}  initial={1} />
    <Footer />
    </>
  );
}

export default App;

