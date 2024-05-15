import "./projects.scss"
import htmlIcon from '../assets/html-Icon.jpg';
import cssIcon from '../assets/css-Icon.jpg';
import jsIcon from '../assets/js-Icon.jpg';
import flutterIcon from '../assets/flutter-Icon.jpg';
import reactIcon from '../assets/react-Icon.jpg';
import reduxIcon from '../assets/redux-Icon.jpg';
import csharpIcon from '../assets/csharp-Icon.jpg';
import Title from "./component";


const Projects = () => {

    const handleClickDetail = () => {

    }

    return (
        <div className="projectContainer">
            <div className="firstLine">
                {Title('Project')}
            </div>
            <div className="slideContainer">
                <div className="project1" >
                    <p className="projectName midFont btnCursor" onClick={()=>{handleClickDetail()}}>
                        MTH <br/>(Media Transfer Hub)
                    </p>
                    <p>
                        
                    </p>
                    
                </div>
                <div className="project2">
                    <p className="projectName midFont btnCursor" onClick={()=>{handleClickDetail()}}>
                        Recam
                    </p>
                </div>
                <div className="project3">
                    <p className="projectName midFont btnCursor" onClick={()=>{handleClickDetail()}}>
                        Bado
                    </p>
                </div>
                <div className="project4">
                    <p className="projectName midFont btnCursor" onClick={()=>{handleClickDetail()}}>
                        Backend Service System
                    </p>
                    
                </div>
            </div>
        </div>


    )
}

export default Projects
