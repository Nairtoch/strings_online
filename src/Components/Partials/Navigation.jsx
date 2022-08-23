import { NavLink } from "react-router-dom";

export const Nav = () => {
    return(
        <nav className="Nav">
            <ul>
                <li>Forside</li>
                <li>Salgs- og handelbetingelser</li>
                <button title="Login"><li><a href="/Login">Login</a></li></button>
            </ul>
        </nav>
    )
}