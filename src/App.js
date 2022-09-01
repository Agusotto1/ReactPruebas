import logo from './logo.svg';
import './App.css';
import NavBar from './navbar/navbar';
import ItemProduct from './ItemProduct/ItemProduct';
import ItemListContainer from './itemListContainer/ItemListContainter';
import ItemListContainer2 from './itemListContainer/ItemListContainer2';
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
  
  return (
    <div className="App">
        <NavBar name="pepito"></NavBar>
      <div>
        <ItemListContainer section="productos en oferta"></ItemListContainer>
      </div>
      
      
    </div>
  );
}

export default App;
