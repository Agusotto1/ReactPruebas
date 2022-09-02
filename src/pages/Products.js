import ItemListContainer from "../itemListContainer/ItemListContainter"

const Products = () => {
    return(
        <div>
            <h1 class="display-3">Elija un producto</h1>
            <section className='main-container'>
                <ItemListContainer/>
            </section>
        </div>
    )
}

export default Products