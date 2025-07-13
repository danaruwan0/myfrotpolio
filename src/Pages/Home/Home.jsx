import React from 'react';
import './home.css';
import profileImg from '../../assets/dana-one.jpg';
import Text from '../../Components/Text/Text';
import Button from '../../Components/Button/Button';
import Contact from '../Contact/Contact';


// Import your CV file
import Cv from '../../assets/dananjaya-cv.pdf';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import DownloadIcon from '@mui/icons-material/Download';
import ContactMailIcon from '@mui/icons-material/ContactMail';



export default function Home() {
  const nameText = 'name-text';
  const introText = 'intro-text';
  const description = 'description';
  const folowMeText = 'folowMeText';
  const socialIcons = 'socialIcons';
  const downloadCv = 'downloadCv';
  const contactBtn = 'contact-btn';

  const goGithub = () => window.open("https://github.com/danaruwan0", "_blank");
  const goLinkedIn = () => window.open("https://www.linkedin.com/in/sandaruwan-dananjaya-0bb919310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank");
  const goInstagram = () => window.open("https://www.instagram.com/dananjaya7772?igsh=YzljYTk1ODg3Zg==", "_blank");
  const goX = () => window.open("https://x.com/dananjayaruwan0", "_blank");
  
  const downloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = Cv;
    link.download = 'Dananjaya_Sandaruwan_CV.pdf'; // The filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='home-container'>

       {/* Right content */}
      <div className='right-content'>
        <div className='profile-image'>
          <img src={profileImg} alt="Dananjaya" />
        </div>
      </div>
      
      {/* Left content */}
      <div className='left-content'>
        <Text className={nameText} id={nameText} text={"Hi, I'm Dananjaya"} />
        <Text className={introText} id={introText} text="Full-Stack Developer & UI Artisan" />
        <Text
          className={description}
          id={description}
          text="I build modern web applications with the elegance of poetry and the precision of logic — crafting seamless user experiences from front-end beauty to back-end power."
        />

        <div className='social-icons'>
          <Text className={folowMeText} id={folowMeText} text={"Follow Me on:"} />

          <Button id='git-hub' className={socialIcons} type='button' onClick={goGithub} icon={<GitHubIcon />} />
          <Button id='linkedIn' className={socialIcons} type='button' onClick={goLinkedIn} icon={<LinkedInIcon />} />
          <Button id='instagram' className={socialIcons} type='button' onClick={goInstagram} icon={<InstagramIcon />} />
          <Button id='x' className={socialIcons} type='button' onClick={goX} icon={<XIcon />} />
        </div>

        <div className="action-buttons">
          <Button
            id='download-cv'
            className={downloadCv}
            type='button'
            onClick={downloadCV}
            icon={<DownloadIcon />}
            text='Download CV'
          />

           <Button
            id='contact-btn'
            className={contactBtn}
            type='button'
            // onClick={downloadCV}
            icon={<ContactMailIcon/>}
            text='Contact Me'
          />

          
        </div>
      </div>

     
    </div>
  );
}