import ItemListContainer from "../itemListContainer/ItemListContainter"

import {Link} from "react-router-dom"

const Home = () => {
    return (
        <>
        
        
        <div>
            <h1 class="display-2">Bienvenido a la tienda mas grande de Argentina</h1>
            <ItemListContainer section="productos mas buscados" />
            

        </div>
        </>
    )
}

export default Home 