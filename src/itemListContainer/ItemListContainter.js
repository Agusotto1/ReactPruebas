import { useEffect, useState} from "react";
import {useParams} from "react-router-dom"

import products from "../utils/products.mock";
import ItemList from "../ItemList/ItemList";
const ItemListContainer = (props) => {

   
    const [listProducts, setListProducts] =useState([])
    const { category } = useParams()
    const filterCategory = products.filter((products) => products.category === category)





    const getProducts = new Promise ( (resolve, reject ) =>{
        setTimeout( () => {
            if (category) {
                resolve(filterCategory)}
            else{
            resolve(products)}
        }, 2000)

    });

    
    /* se renderiza solo en el montaje */
   useEffect(()=>{
    /* una forma */
        getProducts
            .then((res) =>{    /*el primer parametro es la respuesta de la promesa en este caso res*/
                setListProducts(res)
        })
        .catch((error)=>{
            console.log("la llamada fallo")
        })
        .finally(()=>{
                /* retorna el resultado  */
        })
   }, [])
 


    

   /* asincronismo otra forma  */

    //const getLog = async () => {
    //     try {
    //         const responseLog = await nuevaPromesa()
    //         console.log("Respuesta desde async function" + responseLog)
    //     }
    //     catch(error) {
    //         console.log(error)
    //     }
    // }
    //getLog()

    /* con el fetch accedemos a una promesa */


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
            <ItemList dataProducts={listProducts} ></ItemList>  
            

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