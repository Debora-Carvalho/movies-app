import './navbar.scss';
import { RiMovie2AiFill } from "react-icons/ri";

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo-inteira">
                <RiMovie2AiFill />
                Movies App
            </h1>
            <h2 className="page-title">Filmes</h2>
        </nav>
    )
}

export default Navbar;