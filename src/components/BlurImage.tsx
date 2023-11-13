import React from 'react';
import '../Style/blur_image.css';

const BlurImage = ({ imageSrc }) => {
  return (
    <div className='blur-container'>
      <div className='blur-background' style={{ backgroundImage: `url(${imageSrc})` }}></div>
      <img
        className='sharp-image'
        src={imageSrc}
        alt='Imagem de um corretor'
      />
    </div>
  );
};

export default BlurImage;
