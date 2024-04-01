import Title from "./component"
import "./projects.css"

const Projects = ()=>{
    return (
    <div className="projectContainer">
        <div className="firstLine">
            {Title('Projects')}
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