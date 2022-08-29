import { useEffect } from "react";
import ItemProduct from "../ItemProduct/ItemProduct"
const ItemListContainer = (props) => {

    const product1 = {
        title:"notebook bgh",
        price: 1000,
        image: "bgh.jpg",
        stock: 5,
    };
    const product2 = {
        title:"macbook",
        price: 2000,
        image:"macbook.png",
        stock: 3,
    }
   
    //useEffect(() => {
    //
    //
    //
    //}, []
    //)
 // con un array vacio [] como segundo parametro se ejecuta solo una vez
 // en la fase de montaje
 // el useEffect se usa para los ciclos de vida, en el montaje, actualizacion
 // o desmontaje. 
 //si quiero que se actualice cada vez que se actualiza, no se pasa 2do parametro
 // lo que ponga dentro del useEffect es lo que va hacer que cambie de estado
 // ej pongo el [contador] se va actualizar cada vez que cambie el estado
 // del contador 


    
    return(

       
        <div>
            <h2>{props.section}</h2>    
            <ItemProduct data={product1} ></ItemProduct>
            <ItemProduct data={product2}></ItemProduct>

        </div>



    )


}

export default ItemListContainer
//el ItemListContainer es un componente conenedor
//porque tiene otros componentes dentro en este caso el ItemProduct

//si yo pongo algo dentro de un componente entre etiquetas por ejemplo
// un div, lo detecta automaticamente como children, entonces en el
// componente hijo lo va a tomar en props, llamandolo como children
//ver video 16:04 