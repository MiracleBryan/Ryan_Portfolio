import avator from '../assets/avator.jpg';
import './personalInfo.css'


const PersonalInfo = () => {


    return (
        <div>
            <div>
                <div className='avatorTop'>
                    <div className='avatorContainer'>
                        <img className="avator" src={avator} alt="avator"></img>
                    </div>
                    <div className='largeFont name'>
                        Ryan Wang
                    </div>
                </div>
            </div>



        </div>
    )
}








export default PersonalInfo