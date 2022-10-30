
import './App.css';
import Cards from './components/Cards';
import CardsImagesTexts from './components/CardsImagesTexts';
import Form from './components/Form';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Cards />
      <CardsImagesTexts />
 
      <Form />
  
      </div>
  );
}

export default App;
