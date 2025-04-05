import './MenuItem.css';
import {Link} from 'react-router-dom';
function MenuItem({icon, text, to}) {
    return ( 
        <Link to={to} className="menu-item">
            <img src={icon} alt={text} />
            <span>{text}</span>
        </Link>
     );
}

export default MenuItem;