import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './naviBar.scss';
import { BlobItem, BlobServiceClient, StorageSharedKeyCredential} from '@azure/storage-blob';

const NavigationBar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [activedBtn, setActiveBtn] = useState<string>('Home');

    //Azure blob setting
    //const connectionString = "https://ryanportfolio1.blob.core.windows.net/";
    //const containerName = 'portfolio';
    //const resumeName = "Ryan Wang Resume.pdf"
    const sasUrl  = encodeURIComponent(process.env.SASURL!)

    //process.env.SASURL
    

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

    const handleNaviClick = (tag: string): void => {
        setActiveBtn(tag)
        setTimeout(() => { }, 500)
    }

    const handleDownloadResume = async () => {
        try {
            var file = await fetch(sasUrl)
            var blob = await file.blob()
            console.log(file.blob);
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'Ryan_Wang_Resume.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            //blobFile.push(await response.blobBody?.text());
        } catch (e) {
            console.log(e)
            window.alert("\n                         Function temporarily unavailable-_-\n\n                    Please contact ryan.wang496@gmail.com")
        }




        // try {
        //     const res = await fetch(url)
        //     console.log("Success: " + res.body)
        // } catch (e) {
        //     console.log("Failed")
        // }


    }

    return (
        <div className="navContainer">
            <div className="navTagContainer">
                <div>
                    <Link to="/Ryan_Portfolio/home" className={`navTag ${activedBtn == 'Home' ? 'actived' : ''}`} onClick={() => { handleNaviClick('Home') }}>Home</Link>

                    <Link to="/Ryan_Portfolio/me" className={`navTag ${activedBtn == 'Me' ? 'actived' : ''}`} onClick={() => { handleNaviClick('Me') }}>About Me </Link>

                    <Link to="/Ryan_Portfolio/skills" className={`navTag ${activedBtn == 'Skills' ? 'actived' : ''}`} onClick={() => { handleNaviClick('Skills') }}>Skills </Link>

                    <Link to="/Ryan_Portfolio/projects" className={`navTag ${activedBtn == 'Projects' ? 'actived' : ''}`} onClick={() => { handleNaviClick('Projects') }}>Projects</Link>
                </div>
                <div className="downloadFont">
                    <div className="downloadFont" onClick={handleDownloadResume}>Download Resume</div>
                </div>


            </div>
            <div className="navContainer divider"></div>
        </div>

    )
}



export default NavigationBar