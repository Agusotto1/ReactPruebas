import logo from './logo.svg';
import './App.css';
import NavBar from './navbar/navbar';
import ItemProduct from './ItemProduct/ItemProduct';
import ItemListContainer from './itemListContainer/ItemListContainter';
import ItemListContainer2 from './itemListContainer/ItemListContainer2';
function App() {
  return (
    <div className="App">
        <NavBar name="pepito"></NavBar>
      <div>
        <ItemListContainer section="productos en oferta"></ItemListContainer>
      </div>
      <div>
        <ItemListContainer2 section="destacados"></ItemListContainer2>
      </div>
      
    </div>
  );
}

export default App;
