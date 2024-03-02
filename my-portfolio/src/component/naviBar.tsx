import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { useState, useEffect } from "react";
import './naviBar.css';

const NavigationBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
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
                <a href="#home" className="navTag">Home</a>
                <a href="#skills" className="navTag">Skills </a>
                <a href="#projects" className="navTag">Projects</a>
            </div>
            <div className="navContainer divider"></div>
        </div>
        
    )
}



export default NavigationBar