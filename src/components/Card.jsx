import './Card.css'

function Card({title, value, imageLogo, per, color}) {
    return ( 
        <div className='cardName' style={{backgroundColor: color}}>
            <div className='r1'>
                <span className='title'>{title}</span>
                <img src={imageLogo} alt="" className='imgLogo'/>
            </div>
            <h1 className='value'>{value}</h1>
            <p className='per'><span className='phanTram'>▲ {per}%</span> period of change</p>
        </div>
     );
}

export default Card;