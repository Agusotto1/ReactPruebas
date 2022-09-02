import ItemDetail from "../ItemDetail/ItemDetail.js"
import products from "../utils/products.mock.js"

import './ItemDetailContainer.css'
import Modal from "../modal/modal.js"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Products from "../pages/Products.js"
// el use params toma el valor pasado como referencia en la route, para que lo
//tome



const ItemDetailContainer = ({category, data}) =>{
    const [showModal, setShowModal] = useState(false);
    const [productData, setProductData] = useState({});
    const {id} = useParams ();
     useEffect( () =>{
        products.some( (product) =>{
            if (product.id == id) {
                setProductData(product)
                return product
                
            }


        }        )


     }, []
     )   

     

    
   
   
    return (
        <div className={`container-item-detail ${showModal ? 'overlay-black' : ''}`}>
            
            <ItemDetail data={productData} />
            

            
            
            
            

        </div>

    )
}

export default ItemDetailContainer