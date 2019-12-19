import React from 'react';
import '../HeaderImage/HeaderImage.css';

const HeaderImage = ({imageSource, altName, imageClass}) => {
    return (
        <div className="text-center w-50">
            <img src={imageSource} alt={altName} className={imageClass} />
        </div>
    )
}

export default HeaderImage;

