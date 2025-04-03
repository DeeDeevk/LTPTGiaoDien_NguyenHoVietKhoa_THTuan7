import './MenuItem.css'
function MenuItem({icon, text}) {
    return ( 
        <div className="menu-item">
            <img src={icon} alt={text} />
            <span>{text}</span>
        </div>
     );
}

export default MenuItem;