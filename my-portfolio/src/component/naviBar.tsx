import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './naviBar.scss';
import { BlobItem, BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob';
import axios from "axios";

const NavigationBar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [activedBtn, setActiveBtn] = useState<string>('Home');

    //Azure blob setting
    //const connectionString = "https://ryanportfolio1.blob.core.windows.net/";
    //const containerName = 'portfolio';
    //const resumeName = "Ryan Wang Resume.pdf"
    //const sasUrl = encodeURIComponent(process.env.SASURL!)
    const sasUrl = "https://ryanportfolio1.blob.core.windows.net/portfolio/ryan_resume.pdf?sp=r&st=2024-06-06T11:07:24Z&se=2024-09-30T19:07:24Z&spr=https&sv=2022-11-02&sr=b&sig=30l1yTlrZuSRd%2BJ2Mv4efmRbCxe5GF8rMKnhNQ3tRmk%3D"
    //const sasUrl = 'https://ryanportfolio1.blob.core.windows.net/portfolio/Ryan%20Wang%20Resume.pdf?sv=2022-11-02&ss=b&srt=o&sp=r&se=2024-06-07T00:00:00Z&st=2024-06-06T00:00:00Z&spr=https&sig=your_generated_sas_token';
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

    // const handleDownloadResume = async () => {
    //     try {
    //         const response = await fetch(sasUrl, {
    //             method: 'GET',
    //             headers: {
    //                 'Cache-Control': 'no-cache',
    //                 'Pragma': 'no-cache'
    //             }
    //         });

    //         console.log('Response:', response);
    //         if (!response.ok) {
    //             throw new Error(`Network response was not ok: ${response.statusText}`);
    //         }

    //         const blob = await response.blob();
    //         console.log('Blob:', blob);

    //         if (blob.size < 5000) { // Check if the response is too small, indicating a potential error message
    //             const text = await blob.text();
    //             console.log('Blob content (as text):', text);
    //         } else {
    //             const downloadUrl = window.URL.createObjectURL(blob);
    //             const a = document.createElement('a');
    //             a.style.display = 'none';
    //             a.href = downloadUrl;
    //             a.download = 'Ryan_Wang_Resume.pdf';
    //             document.body.appendChild(a);
    //             a.click();
    //             window.URL.revokeObjectURL(downloadUrl);
    //             document.body.removeChild(a);
    //         }
    //     } catch (e) {
    //         console.log(e)
    //         window.alert("\n                         Function temporarily unavailable-_-\n\n                    Please contact ryan.wang496@gmail.com")
    //     }




    //     // try {
    //     //     const res = await fetch(url)
    //     //     console.log("Success: " + res.body)
    //     // } catch (e) {
    //     //     console.log("Failed")
    //     // }


    // }

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
                    <a className='downloadFont' href={sasUrl} onClick={() => { console.log("click github") }}>Show Resume</a>
                </div>


            </div>
            <div className="navContainer divider"></div>
        </div>

    )
}



export default NavigationBar