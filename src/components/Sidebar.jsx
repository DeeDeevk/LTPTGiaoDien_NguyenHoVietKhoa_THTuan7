import MenuItem from "./MenuItem";
import './Sidebar.css'
import folder from '../assets/Folder.png'
import group from '../assets/Groups.png'
import pie from '../assets/Pie chart.png'
import chat from '../assets/Chat.png'
import code from '../assets/Code.png'
function Sidebar() {
    return ( 
        <div className="sidebar">
            <MenuItem icon={folder} text="Projects" to='/'/>
            <MenuItem icon={group} text="Teams" to='/team'/>
            <MenuItem icon={pie} text="Analytics" to='/analytics'/>
            <MenuItem icon={chat} text="Messages" to='/messages' />
            <MenuItem icon={code} text="Itegrations" to='/itegration'/>    
        </div>
    );
}

export default Sidebar;