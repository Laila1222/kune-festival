import React from 'react';
import './IntroText.css';

const IntroText = ({introTitle, introText, introTextClass}) => {
  return (
    <div className="position-relative w-100">
      <div className={introTextClass}>
        <h2 className="py-3">{introTitle}</h2>
        <p>{introText}</p>
      </div>
    </div>
  );
};

export default IntroText;
