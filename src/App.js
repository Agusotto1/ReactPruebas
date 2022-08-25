import logo from './logo.svg';
import './App.css';
import NavBar from './navbar/navbar';
import ItemProduct from './ItemProduct/ItemProduct';

function App() {
  return (
    <div className="App">
    <NavBar name="pepito"></NavBar>
    <div>
      <ItemProduct title="notebook bgh" price={1000} image="bgh.jpg" ></ItemProduct>
      <ItemProduct title="notebook lenovo" price={200} image="lenovo.jpg"></ItemProduct>
    </div>

    </div>
  );
}

export default App;
