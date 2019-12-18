import React from 'react';
import HeaderImage from '../HeaderImage/HeaderImage.js';
import IntroText from '../IntroText/IntroText.js';

const IntroPart = ({
  imageSource,
  altName,
  imageClass,
  introTitle,
  introText,
  introTextClass,
}) => {
  return (
    <div className="d-flex w-75 mx-auto pt-5">
      <HeaderImage
        imageSource={imageSource}
        altName={altName}
        imageClass={imageClass}
      />
      <IntroText
        introTitle={introTitle}
        introText={introText}
        introTextClass={introTextClass}
      />
    </div>
  );
};

export default IntroPart;
