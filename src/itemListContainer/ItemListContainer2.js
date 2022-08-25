import ItemProduct from "../ItemProduct/ItemProduct"
const ItemListContainer2 = (props) => {
    return(

        <div>
            <h2>{props.section}</h2>
            <ItemProduct title="macbook" price={2000} image="macbook.png" ></ItemProduct>
            <ItemProduct title="omen" price={500} image="omen.jpg"></ItemProduct>

        </div>



    )


}

export default ItemListContainer2
//el ItemListContainer es un componente conenedor
//porque tiene otros componentes dentro 