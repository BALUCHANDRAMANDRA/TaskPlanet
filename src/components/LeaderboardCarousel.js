import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/LeaderboardCarousel.css';
import Slider from 'react-slick';
import '../styles/LeaderboardCarousel.css';

const images = [
  require('../image/1.jpg'),
  require('../image/2.jpg'),
  require('../image/3.jpg'),
  require('../image/4.jpg'),
];

const LeaderboardCarousel = () => {
  
  const settings = {
    dots: true,                
    infinite: true,             
    speed: 500,                
    slidesToShow: 1,           
    slidesToScroll: 1,          
    autoplay: true,             
    autoplaySpeed: 2000,        
    pauseOnHover: true,        
    arrows: false,              
  };

  return (
    <div className="Carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="image-container" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LeaderboardCarousel;