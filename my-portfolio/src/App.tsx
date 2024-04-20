import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import NavigationBar from './component/naviBar';
import PersonalInfo from './component/personalInfo';
import Skills from './component/skills';
import Projects from './component/projects';
import AboutMe from './component/me';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <AnimatedComponent />
      </div>
    </Router>
  );
}

// Add routing animation
const AnimatedComponent = () => {
  let location = useLocation();
  //const [isTransitioning, setIsTransitioning] = useState(false);
  return <div className='container'>
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={{ enter: 500, exit: 500 }}
        classNames="fade"
        // onExit={() => setIsTransitioning(true)}
        // onExited={() => setIsTransitioning(false)}
      >
        {/* Define each route path*/}
        <Routes location={location}>
          <Route path="" element={<PersonalInfo />} />
          <Route path="/Ryan_Portfolio/" element={<PersonalInfo />} />
          <Route path="/home" element={<PersonalInfo />} />
          <Route path="/me" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  </div>
  
  
}

export default App;
