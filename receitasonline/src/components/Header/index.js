import { Link } from "react-router-dom";
import './header.css';
import Logo from "../../assets/ImgLogo.png"
import Add from "../../assets/add.png"

function Header(){
    return(
        <header>
            <Link to="/">
                <img className="ImgLogo" src={Logo}/>
            </Link>
            <Link className="TxtLogo" to="/">
                Receitas Online!
            </Link>
            <Link className="AddReceita" to="/NovaReceita">
                ADICIONAR RECEITA
                <img className="ImgAdd" src={Add}/>
            </Link>
        </header>
    );
}

export default Header;