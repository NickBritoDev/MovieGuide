import { Link } from "react-router-dom";
import './index.css'

export default function Error(){
    return(
        <div className="containerError">
            <h1>❌404❌</h1>
            <p>Pagina não encontrada</p>
            <Link className="btnError" to='/MovieGuide/'>HOMEPAGE</Link>
        </div>
    )
}