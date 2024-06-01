import avator from '../assets/avator.jpg';
import './personalInfo.scss'


const PersonalInfo = () => {


    return (
        <div className='container'>
            
            <div className='firstLine'>
                <div className='leftPart'>
                    <p className='midFont defCursor grad'>Hello, I'm Ryan Wang</p>
                    <p className='midFont defCursor'>Full-Stack Developer | Software Engineer</p>
                    <div className='subDis'>
                        <p className='smallFont defCursor'>As a full-stack developer | software engineer, I am dedicated to turning ideas into inovative web applications. Explore my latest project, showcasting my expertise in software development.</p>
                        <div>
                            <a className='smallFont linkedin' href='https://www.linkedin.com/in/ryan-wang1120' onClick={() => { console.log("click linkedin") }}>Linkedin</a>
                            <a className='smallFont linkedin' href='https://github.com/MiracleBryan' onClick={() => { console.log("click github") }}>Github</a>
                        </div>
                        
                    </div>

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