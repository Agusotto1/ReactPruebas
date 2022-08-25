import "../ItemProduct/ItemProduct.css"
const ItemProduct =(props) => {
    
    const {title, price, image} = props

    return(
        <div className="item-product">
            <p>{title}</p>
            <img src={`/assets/${image}`} alt="" className="producto" />
            
            <p>${price}</p>
            <button>comprar</button>


        </div>


    )
 // tiene que retornar un codigo jsx que tiene que tener al menos un elementos
}

export default ItemProduct