import { Link } from "react-router-dom"
import "./NavMenu.css"

const NavMenu = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/users"><img src="./img/usuario.png" /></Link>
                </li>
            </ul>	
            <ul>
                <li>
                    <Link to="/groups"><img src="./img/grupo.png" /></Link>
                </li>
            </ul>	
            <ul>
                <li>
                    <Link to="/config"><img src="./img/engranaje.png" /></Link>
                </li>
            </ul>	
        </nav>
    )
}

export default NavMenu