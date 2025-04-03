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
            <MenuItem icon={folder} text="Projects"/>
            <MenuItem icon={group} text="Teams"/>
            <MenuItem icon={pie} text="Analytics"/>
            <MenuItem icon={chat} text="Messages"/>
            <MenuItem icon={code} text="Itegrations"/>    
        </div>
    );
}

export default Sidebar;