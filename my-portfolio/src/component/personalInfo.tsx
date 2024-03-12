import avator from '../assets/avator.jpg';
import './personalInfo.css'


const PersonalInfo = () => {


    return (
        <div className='container'>
            <div className='firstLine'>
                
                <div className='leftPart'>
                    <p className='midFont defCursor grad'>Hello, I'm</p>
                    <p className='largeFont defCursor'>Ryan Wang</p>
                    <p className='smallFont defCursor'>As a full-stack developer | software engineer, I am dedicated to turning ideas into inovative web applications. Explore my latest project, showcasting my expertise in software development.</p>
                    {/* <p className='smallFont defCursor'></p> */}
                    <a className='smallFont linkedin' href='https://www.linkedin.com/in/ryan-wang1120' onClick={()=>{console.log("click linkedin")}}>Linkedin</a>
                </div>
                <div className='avatorTop'>
                    <div className='avatorContainer'>
                        <img className="avator" src={avator} alt="avator"></img>
                    </div>
                    {/* <div>
                        <p className='largeFont name'>Ryan Wang</p>
                        <p className='midFont'>Software Engineer | FullStack Engineer</p>
                    </div> */}
                </div>
            </div>
            <div>

            </div>



        </div>
    )
}








export default PersonalInfo