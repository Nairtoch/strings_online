import { NavLink } from "react-router-dom";

export const Nav = () => {
    return(
        <nav className="Nav">
            <ul>
                <li>Forside</li>
                <li>Salgs- og handelbetingelser</li>
                <button><li><a href="#">Login</a></li></button>
            </ul>
        </nav>
    )
}