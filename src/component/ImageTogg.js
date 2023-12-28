import React, { useState } from 'react'

const ImageTogg = ({ image1, image2 }) => {
  const [isImage1Visible, setIsImage1Visible] =useState(true);

  const handleImageToggle = () => {
    setIsImage1Visible((prevValue) => !prevValue);
  };

  return (
    <div onClick={handleImageToggle} style={{ cursor: 'pointer' }}>
      {isImage1Visible ? (
        <img src={image1} alt="Image 1" style={{ width: '200px', height: '200px' }} />
      ) : (
        <img src={image2} alt="Image 2" style={{ width: '200px', height: '200px' }} />
      )}
    </div>
  );
};

export default ImageTogg;
