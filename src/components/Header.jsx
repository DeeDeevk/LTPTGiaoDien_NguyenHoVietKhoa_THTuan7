import './Header.css'
import logo_dash from '../assets/logo_dash.jpg'
import questions from '../assets/Question 1.png'
import bell from '../assets/Bell 1.png'
import avt from '../assets/Avatar 313.png'

function Header() {
    return ( 
        <div className='h'>
            <div className="logoDash">
                <img src={logo_dash} alt="" />
            </div>
            <div className="searchMore">
                <div className='Searching'>
                    <input type='search' placeholder='Search...'/>
                </div>
                <div className='moreInfo'>
                    <img src={bell} alt="Notice" className='notice'/>
                    <img src={questions} alt="Question" className='question' />
                    <img src={avt} alt="Avatar" className='avt'/>
                </div>
            </div>
        </div>
     );
}

export default Header;