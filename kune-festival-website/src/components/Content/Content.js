import React from 'react';

const Content = ({contentTitle, contentText }) => {
    return (
        <div className="py-5">
            <h2 className="content-title">{contentTitle}</h2>
            <p className="content-text">{contentText}</p>
        </div>
    );
};

export default Content;