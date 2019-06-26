import React from 'react';

function CarouselSlide(props) {
  // console.log(props.slide)
    return (
      <div className={props.index == props.activeIndex ? "carouselSlide carouselSlideActive" : "carouselSlide"}>
        <div className="container">
          <img src={props.slide.urls.raw} />
          <div className="centered">
            <p className="carouselSlideContent">{props.slide.alt_description}</p>
          </div>
        </div>
      </div>
    );
}

export default CarouselSlide;