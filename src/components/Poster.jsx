import React from 'react';
import './Poster.css';
import Bannnerbot from "./tiffinwala banner.jpg"
const images = [
  { src: 'path/to/image1.jpg', alt: 'Image 1' },
  { src: 'path/to/image2.jpg', alt: 'Image 2' },
  { src: 'path/to/image3.jpg', alt: 'Image 3' },
  // Add more images as needed
];

const PosterWithBlinkingBorder = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      
        <div  style={{ margin: '10px' }}>
          <img src={Bannnerbot} alt={"image"} className="blinking-border" />
        </div>
     
    </div>
  );
};

export default PosterWithBlinkingBorder;
