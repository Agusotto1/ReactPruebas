import ItemListContainer from "../itemListContainer/ItemListContainter";
import {Link} from "react-router-dom"

const Category = ()=>{
   
   return(
            <div>
                    <h1 className="display-3">Elija una de las siguientes categorias</h1>
                    <section className='main-container'>
                        <ul id="CAT">
                            <li className="CAT1"><Link to="/category/old">old</Link></li>
                            <li className="CAT1"><Link to="/category/new">new</Link></li>
                            
                        </ul>
                    </section>
                </div>
   )

}

export default Category