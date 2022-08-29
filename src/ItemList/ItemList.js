import ItemProduct from "../ItemProduct/ItemProduct";

const ItemList =({dataProducts})=>{

    return(
        <>
            
            {dataProducts.map( (product) => {    
                return (
                    <>
                        <ItemProduct  data={product}/>
                    </>
                )
            })}
        </>
    )
}

export default ItemList