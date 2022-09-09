import {BrowserRouter, Routes, Route} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar/navbar';
import ItemProduct from './ItemProduct/ItemProduct';
import ItemListContainer from './itemListContainer/ItemListContainter';

import Home from "./pages/Home"
import Contact from "./pages/Contact.js"
import Products from "./pages/Products.js"
import Detail from "./pages/Detail.js"
import Category from "./pages/Category";
import Checkout from './pages/Checkout';



function App() {

  fetch("https://jsonplaceholder.typicode.com/users")
  //con el fetch llamamos a una api falsa la lista de usuarios
  //por defecto hace METODO GET
  //sino method: "POST"
  // Access-Control-Allow-Origin -> para evitar el BLOQUEO DE CORS. llamados de otras url
  //     body: JSON.stringify"  -> cuando enviamos tenemos que pasar a string
  //          email: aaaa@gmail.com"
  //          user: asasaas
  .then((response) =>{
    return response.json()
  })
  //el primer then retorna un valor en json
  //recien con el segundo then veo los valores traidos
  .then( (data) =>{
    console.log(data)

  }
  )
  //todo lo que envuelva el browserRouter es lo que va a permitir usar las rutas
  return (
    <BrowserRouter>
    <div className="App">
        <NavBar name="pepito"></NavBar>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/Contact" element={< Contact/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/Products/:id' element={<Detail/>} />
          <Route path="category/" element={<Category/>}/>
          <Route path="category/:category" element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Checkout />}/>
          <Route/>
          
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
