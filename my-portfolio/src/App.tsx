import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import NavigationBar from './component/naviBar';
import PersonalInfo from './component/personalInfo';
import Skills from './component/skills';

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
  return <div className='container'>
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={{ enter: 400, exit: 0 }}
        classNames="fade"
      >
        {/* Define each route path*/}
        <Routes location={location}>
          <Route path="" element={<PersonalInfo />} />
          <Route path="/home" element={<PersonalInfo />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/me" element={<Skills />} />
          <Route path="/projects" element={<Skills />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  </div>
  
  
}

export default App;
