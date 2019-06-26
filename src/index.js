import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LeftArrow from './leftArrow.js';
import RightArrow from './rightArrow.js';
import CarouselSlide from './carouselSlide.js';
import CarouselIndicator from './carouselIndicator.js';


import './style/style.css';

class Carousel extends Component {
  _isMounted = false
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isLoaded: false,
      items: []
    };
  }


  componentDidMount(){
        this._isMounted = true
            // console.log("componentDidMount")
            fetch('https://api.unsplash.com/search/photos?query=laptop&client_id=0ab6e909fe3db9a8be123b12764d47a8d5f4ea8468555a796512b38ca0e827f1')
            .then(res => res.json())
            .then(
              (result) => {
                if(this._isMounted ){
                  this.setState({
                    isLoaded: true,
                    items: result.results
                  });
                }
              },
              (error) => {
                if(this._isMounted ){
                this.setState({
                  isLoaded: true,
                  error
                });
              }
              }
            )
      }

      componentWillUnmount(){
        this._isMounted = false
      }

  goToSlide =(index)=> {
    this.setState({ activeIndex: index });
  }

  goToLeftSlide =(e)=> {
    e.preventDefault();

    let index = this.state.activeIndex;
    let slidesLength = this.state.items.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;
    // console.log('left',this.state.items.length)
    // console.log('LEFT',index)

    this.setState({ activeIndex: index });
  }

  goToRightSlide =(e)=> {
    e.preventDefault();

    let index = this.state.activeIndex;
    let slidesLength = this.state.items.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;
    // console.log('right',this.state.items.length)
    // console.log('RIGHT',index)

    this.setState({ activeIndex: index });
  }

  render() {
    // console.log('length',this.state.items.length)
    return (
      <div className="carousel">
        <LeftArrow onClick={e => this.goToLeftSlide(e)} />

        <ul className="carouselSlides">
         {this.state.items.map((slide, index) =>
            // console.log(slide.alt_description,index)
            <CarouselSlide 
              key={index} 
              index={index} 
              activeIndex={this.state.activeIndex} 
              slide={slide}/>
          )}
        </ul>

        <RightArrow onClick={e => this.goToRightSlide(e)} />

        <ul className="carouselIndicators">
          {this.state.items.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex==index} 
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Carousel/>, document.getElementById('app'));