import { useState } from 'react';
import { Carousel } from 'bootstrap';
import ExampleCarouselImage1 from './Components/images/bag.jpeg';
import ExampleCarouselImage2 from './Components/images/bag1.jpeg';
import ExampleCarouselImage3 from './Components/images/bag10.jpeg'; 

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage1 text="First slide" img src={ExampleCarouselImage1} alt='sale_img' className="carousel"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Spscisl Offer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage2 text="Second slide" img src={ExampleCarouselImage2} alt='sale_img' className="carousel"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Hurry UP !! It's clearance sale ! </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage3 text="Third slide" img src={ExampleCarouselImage3} alt='sale_img' className="carousel"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Fashion Sale.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;