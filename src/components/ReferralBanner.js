import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/LeaderboardCarousel.css';
import Slider from 'react-slick';
import '../styles/ReferralBanner.css'

const images = [
  require('../image/5.jpg'),
  require('../image/6.jpg'),
  require('../image/7.jpg'),
];


const CustomDot = ({ onClick, active }) => (
  <button className={`custom-dot ${active ? 'active' : ''}`} onClick={onClick}>
    ●
  </button>
);

const LeaderboardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    customPaging: (i) => <CustomDot active={i === 0} /> 
  };

  return (
    <div className='Carousel'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className='image-container' key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LeaderboardCarousel;
