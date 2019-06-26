import React from 'react';

function  CarouselIndicator(props) {
    return (
      <li>
        <a className={props.index == props.activeIndex ? "carouselIndicator carouselIndicatorActive" : "carouselIndicator"}
           onClick={props.onClick}
        />
      </li>
    );
}

export default CarouselIndicator;