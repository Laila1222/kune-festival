import React from 'react';
import './MediaIcon.css';

const MediaIcon = ({link, imageSrc, altText}) => {
  return (
    <a href={link} className="px-2">
      <img className="media-icon" src={imageSrc} alt={altText} />
    </a>
  );
};

export default MediaIcon;
