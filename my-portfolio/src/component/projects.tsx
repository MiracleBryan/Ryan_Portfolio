import "./projects.css"
import htmlIcon from '../assets/html-Icon.jpg';
import cssIcon from '../assets/css-Icon.jpg';
import jsIcon from '../assets/js-Icon.jpg';
import flutterIcon from '../assets/flutter-Icon.jpg';
import reactIcon from '../assets/react-Icon.jpg';
import reduxIcon from '../assets/redux-Icon.jpg';
import csharpIcon from '../assets/csharp-Icon.jpg';
import Title from "./component";


const Projects = () => {
    return (
        <div className="projectContainer">
            <div className="firstLine">
                {Title('Project')}
            </div>
            <div className="slideContainer">
                <div className="project1 midFont">
                    Project 1
                </div>
                <div className="project2 midFont">
                    Project 2
                </div>
                <div className="project3 midFont">
                    Project 3
                </div>
            </div>
        </div>


    )
}

export default Projects
