
import { useState} from "react"
import "../ItemProduct/ItemProduct.css"
const ItemProduct =({data}) => {
    
    const {title, image, price, stock} = data
    
    const [contador, setContador] = useState(1)

   
    
        /* getProducts
            .then( (res) => { 
            
            setListProduct(res)
            })
            .catch( (error) => { 
            console.log("error de conexion")
             })
            .finally( () => { 
        
            }) */
    
    
    
    const addCantidad = () => {
            if (contador<stock) {
                setContador(contador + 1)    
            }else{
                alert("excede el stock")
            }
            
    }

    const removeCantidad = () => {
        if (contador>1) {
            setContador(contador - 1)
        }
            
    }



    return(
        <div className="item-product">
            <p>{title}</p>
            <img src={`/assets/${image}`} alt="" className="producto" />
            
            <p>${price}</p>
            <p>stock {stock}</p>
            <div>
                <button onClick={removeCantidad}>-</button>
                <p>{contador}</p>
                <button onClick={addCantidad}>+</button>
            </div>
            <button>comprar</button>


        </div>


    )
 // tiene que retornar un codigo jsx que tiene que tener al menos un elementos
// cuando declaramos un estado vsc entiende que tiene que modificar esa parte y no toda la pantalla
}

export default ItemProduct