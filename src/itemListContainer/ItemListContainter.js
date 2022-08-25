import ItemProduct from "../ItemProduct/ItemProduct"
const ItemListContainer = (props) => {
    return(

        <div>
            <h2>{props.section}</h2>
            <ItemProduct title="notebook bgh" price={1000} image="bgh.jpg" ></ItemProduct>
            <ItemProduct title="notebook lenovo" price={200} image="lenovo.jpg"></ItemProduct>
            <ItemProduct title="sony vaio" price={500} image="vaio.jpg"></ItemProduct>

        </div>



    )


}

export default ItemListContainer
//el ItemListContainer es un componente conenedor
//porque tiene otros componentes dentro 