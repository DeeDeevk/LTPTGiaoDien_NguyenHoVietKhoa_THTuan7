import './Content.css'
import square_four from '../assets/Squares four 1.png'
function Content() {
    return ( 
        <div>
            <div className='ovrView'>
                <div className='ovr_gr'>
                    <img src={square_four} alt="Square four" />
                    <span>Overview</span>
                </div>
                <div>

                </div>
            </div>
            <div className='DReport'>

            </div>
        </div>
     );
}

export default Content;