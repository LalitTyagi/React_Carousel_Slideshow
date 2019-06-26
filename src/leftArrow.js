import React from 'react';

function LeftArrow(props) {
  return (
      <a href="#" className="carouselArrow carouselArrowLeft" onClick={props.onClick}>
        <p><i className="arrow left"></i></p>
      </a>
    );
}

export default LeftArrow;