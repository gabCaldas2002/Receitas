import { Link } from "react-router-dom";
import './erro.css';
import Triste from "../../assets/Error.png"

function Erro(){
    return(
        <div className="containerErro">
            <img className="Triste" src={Triste}/>
            <h1>404</h1>
            <h1>PÁGINA NÃO ENCONTRADA!</h1>
            <h3>Não encontramos a página que você estava procurando...</h3>
            <Link to={`/`}>Voltar a descobrir receitas.</Link>
        </div>
    );
}

export default Erro;