import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import './naviBar.css';

const NavigationBar = () => {
    const [activeLink, setActiveLink] = useState<string>('home');
    const [scrolled, setScrolled] = useState<boolean>(false);
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

    const onUpdateActiveLink = (value:string) => {
        setActiveLink(value);
    }



    return (
        <div className="navContainer">
            <div className="navTagContainer">

                <Link to="/home" className="navTag">Home</Link>

                <Link to="/me" className="navTag">About Me </Link>

                <Link to="/skills" className="navTag">Skills </Link>

                <Link to="/projects" className="navTag">Projects</Link>

                
            </div>
            <div className="navContainer divider"></div>
        </div>
        
    )
}



export default NavigationBar