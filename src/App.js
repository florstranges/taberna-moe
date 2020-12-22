import './components/Navbar/Navbar.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';


function App() {
  
  return (
    <>
    <Navbar />
    <ItemListContainer saludo="¡Bienvenido a mi Taberna!" />
    <Footer />
    </>
  );
}

export default App;

