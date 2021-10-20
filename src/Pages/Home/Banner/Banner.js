import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div id="home">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>We care Allah cure..</h3>
      <p>Best Treatment....</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>We care Allah cure..</h3>
      <p>Comfortable cabin....</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>We care Allah cure..</h3>
      <p>Best ICU and operation theater.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;