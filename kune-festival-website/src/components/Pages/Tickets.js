import React from 'react';
import Navigation from '../Navbar/Navigation';
import Footer from '../Footer/Footer.js';
import LineupImage from '../../assets/lineup-with-bg.jpg';
import HeaderImage from '../HeaderImage/HeaderImage.js';
import IntroText from '../IntroText/IntroText.js';
import IntroPart from '../IntroPart/IntroPart.js';

const Tickets = () => {
  return (
    <div>
      <Navigation />

      <IntroPart
        imageSource={LineupImage}
        altName="tickets-header-image"
        imageClass="tickets-header-image"
        introTitle="About Tickets"
        introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        introTextClass="intro-text-class"
      />

      <Footer />

    </div>
  );
};

export default Tickets;
