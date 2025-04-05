import { Route, Routes } from 'react-router-dom'
import './Admin.css'
import logo_Logo from '../../assets/Image 1858.png'
import Sidebar from '../Sidebar';
import NewVer from '../NewVer';
import Header from '../Header';
import Content from '../Content';
import Team from '../Team';
import Messages from '../Messages';
import Analytics from '../Analytics';
import Itegrations from '../Itegrations';
import gr from '../../assets/Group.png'
import '../service/ContactService'

function Admin() {

    return ( 
        <div className='container'>
            <div className="header">
                <Header/>
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
                <Routes>
                    <Route path='/' element={<Content/>} />
                    <Route path='/team' element = {<Team/>}/>
                    <Route path='/messages' element = {<Messages/>}/>
                    <Route path='/analytics' element = {<Analytics/>}/>
                    <Route path='/itegration' element = {<Itegrations/>}/>
                </Routes>
            </div>
        </div>
     );
}

export default Admin;