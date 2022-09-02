import {Link} from "react-router-dom"
import "./navbar.css"

//poniendo link to evito la recarga 
const NavBar =(props) =>{
    return(
    <>
        <div>  
        <h1>TIENDA DE PRUEBA</h1>
        <h2>{props.name}</h2>

        </div>
            <nav>
            <ul>
                <Link to="/"> <li> <button className="barra">Home</button></li> </Link>
                <Link to="/Contact"> <li> <button className="barra">Contact</button></li> </Link> 
                <Link to="/Products"> <li> <button className="barra">Products</button></li> </Link>
                <Link to="/Category"> <li> <button className="barra">Category</button></li> </Link>
            </ul>
            </nav>
    </>


    )

}

export default NavBar