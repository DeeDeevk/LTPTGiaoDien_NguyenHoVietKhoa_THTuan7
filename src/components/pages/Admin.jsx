import './Admin.css'
import logo_Logo from '../../assets/Image 1858.png'
import Sidebar from '../Sidebar';
import NewVer from '../NewVer';
import gr from '../../assets/Group.png'
function Admin() {
    return ( 
        <div className='container'>
            <div className="header">

            </div>
            <div className="menu">
                <div className='image'>
                    <img src={logo_Logo} alt="" />
                </div>
                <div className='menuItems'>
                    <button>
                        Dashboard
                    </button>
                    <Sidebar/>
                </div>
                <div className='newVer'>
                   <NewVer verImg ={gr}/>
                </div>
            </div>
            <div className="content">
                
            </div>
        </div>
     );
}

export default Admin;