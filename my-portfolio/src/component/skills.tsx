import "./skills.scss"
import htmlIcon from '../assets/html-Icon.jpg';
import cssIcon from '../assets/css-Icon.jpg';
import jsIcon from '../assets/js-Icon.jpg';
import flutterIcon from '../assets/flutter-Icon.jpg';
import reactIcon from '../assets/react-Icon.jpg';
import reduxIcon from '../assets/redux-Icon.jpg';
import csharpIcon from '../assets/csharp-Icon.jpg';
import Title from "./component";


const Skills = () => {
    return (
        <div className="skillContainer">
            <div className="firstLine">
                {Title('Skills')}
            </div>
            <div className="secondLine">
                <div className="leftContainer">
                    <div className="skill-1 smallFont defCursor">
                        <img src={htmlIcon} alt="No Info"></img>
                        <div >
                            <p>
                                HTML5 (Hypertext Markup Language)
                            </p>
                        </div>
                        
                    </div>
                    <div className="skill-1 smallFont defCursor">
                        <img src={cssIcon} alt="No Info"></img>
                        <div>
                            <p>
                                CSS3 (Cascading Style Sheets)
                            </p>
                        </div>
                        
                    </div>
                    <div className="skill-1 smallFont defCursor">
                        <img src={jsIcon} alt="No Info"></img>
                        <div>
                            <p className="alignFont">
                                Javascript
                            </p>
                        </div>
                        
                    </div>
                    <div className="skill-1 smallFont defCursor">
                        <img src={flutterIcon} alt="No Info"></img>
                        <div>
                            <p className="alignFont">
                                Flutter
                            </p>
                        </div>
                        
                    </div>
                    <div className="skill-1 smallFont defCursor">
                        <img src={reactIcon} alt="No Info"></img>
                        <div>
                            <p className="alignFont">
                                React
                            </p>
                        </div>
                        
                    </div>
                    <div className="skill-1 smallFont defCursor">
                        <img src={reduxIcon} alt="No Info"></img>
                        <div>
                            <p className="alignFont">
                                Redux
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="rightContainer">
                    <div className="skill-1 smallFont defCursor">
                        <img src={csharpIcon} alt="No Info"></img>
                        <div>
                            <p className="alignFont">
                                C#
                            </p>
                        </div>
                        
                    </div>
                </div>



            </div>


        </div>


    )
}

export default Skills
