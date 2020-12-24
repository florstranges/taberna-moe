import './components/Navbar/Navbar.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  
  return (
    <>
    <Navbar />
    <ItemListContainer saludo="¡Bienvenido a mi Taberna!" />
    <ItemDetailContainer />
    <Footer />
    </>
  );
}

export default App;

