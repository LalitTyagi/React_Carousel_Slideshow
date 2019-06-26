import React from 'react';

function RightArrow(props) {
  return (
      <a href="#" className="carouselArrow carouselArrowRight" onClick={props.onClick}>
        <p><i className="arrow right"></i></p>
      </a>
    );
}

export default RightArrow;
