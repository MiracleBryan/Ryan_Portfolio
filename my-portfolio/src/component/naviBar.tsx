import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import './naviBar.scss';

const NavigationBar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [activedBtn, setActiveBtn] = useState<string>('Home');
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const handleNaviClick = (tag: string):void => {
        setActiveBtn(tag)
        setTimeout(()=>{},500)
    }



    return (
        <div className="navContainer">
            <div className="navTagContainer">

                <Link to="/home" className={`navTag ${activedBtn == 'Home' ? 'actived' : ''}`} onClick={()=>{ handleNaviClick('Home')}}>Home</Link>

                <Link to="/me" className={`navTag ${activedBtn == 'Me' ? 'actived' : ''}`} onClick={()=>{handleNaviClick('Me')}}>About Me </Link>

                <Link to="/skills" className={`navTag ${activedBtn == 'Skills' ? 'actived' : ''}`} onClick={()=>{handleNaviClick('Skills')}}>Skills </Link>

                <Link to="/projects" className={`navTag ${activedBtn == 'Projects' ? 'actived' : ''}`} onClick={()=>{handleNaviClick('Projects')}}>Projects</Link>

                
            </div>
            <div className="navContainer divider"></div>
        </div>
        
    )
}



export default NavigationBar