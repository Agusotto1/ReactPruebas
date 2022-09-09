import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import {Link} from "react-router-dom"
const ItemDetail = ({ data }) => {

    
    
    const [quantitySelected, setQuantitySelected] = useState(0)
    
    // en el setQuantity Select se guarda la cantidad seleccionada en el
    // componente countquantity




    return (
        <>
            <div className="item-detail1">
                
                <img 
                    src={`/assets/${data.image}`} 
                    alt="" className="producto" 
                    
                />

                <p>{data.title}</p>
                <p>price: {data.price}</p>
                <p>available stock: {data.stock}</p>
                <p>category: {data.category}</p>
               


                {
               quantitySelected >0 ? <button><Link to="/cart">TERMINAR COMPRA</Link></button> 
               : <ItemCount setQuantitySelected={setQuantitySelected} cantProduct={data.stock} productData={data}/>
            }


                
            </div>

            
            


        </>
    )

}

export default ItemDetail