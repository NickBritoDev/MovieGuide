import './index.css';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <header>
            
            <Link className='logo' to='/MovieGuide'><span>Movie</span>Guide</Link>
        </header>
    )
}