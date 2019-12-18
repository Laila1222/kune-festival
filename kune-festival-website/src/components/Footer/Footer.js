import React from 'react';
import MediaIcon from '../MediaIcon/MediaIcon';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram-logo.png';
import Mail from '../../assets/email.png';
import './Footer.css';


const Footer = () => {
    return ( 
        <footer className="page-footer py-2 mb-2">
            <MediaIcon link="https://www.instagram.com/" imageSrc={Instagram} altText="instagram" />
            <MediaIcon link="https://www.facebook.com/" imageSrc={Facebook} altText="facebook" />
            <MediaIcon link="mailto:korosililla@gmail.com" imageSrc={Mail} altText="email" />
        </footer>
    )
}

export default Footer;