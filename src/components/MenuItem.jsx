import './MenuItem.css';
import {NavLink} from 'react-router-dom';
function MenuItem({icon, text, to}) {
    return ( 
        <NavLink to={to} className="menu-item">
            <img src={icon} alt={text} />
            <span>{text}</span>
        </NavLink>
     );
}

export default MenuItem;