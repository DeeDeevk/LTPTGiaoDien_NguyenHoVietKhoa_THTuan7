import './NewVer.css'

function newVer({verImg}) {
    return ( 
        <div className="avai">
            <img src={verImg} alt="new Version"/>
            <h3>V2.0 is available</h3>
            <button>Try now</button>
        </div>
     );
}

export default newVer;