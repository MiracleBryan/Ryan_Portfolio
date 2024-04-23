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
                <div className="project1 midFont">
                    MTH <br/>(Media Transfer Hub)
                    <div className="midFont">
                        1111111
                    </div>
                    <div className="smallFont" onClick={()=>{handleClickDetail()}}>
                        click this
                    </div>
                </div>
                <div className="project2 midFont">
                    Recam
                </div>
                <div className="project3 midFont">
                    Bado
                </div>
                <div className="project4 midFont">
                    Backend Service System
                </div>
            </div>
        </div>


    )
}

export default Projects
