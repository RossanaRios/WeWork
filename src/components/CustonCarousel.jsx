import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export function CustonCarousel(){
    return(
        <Carousel variant="dark">
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://ctfassets.imgix.net/vh7r69kgcki3/4IY416EqySXcQq3A51yzM4/17de763e2381784ae66adc608cbdbce3/Web_150DPI-WeWork__-__21_Collyer_Quay__-__Singapore-15.jpg?"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://ctfassets.imgix.net/vh7r69kgcki3/HsR6nHqS3I8CxPIuT9EKD/92d775ed2747927686ec6a2f21d4864f/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_8.jpg?"
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://ctfassets.imgix.net/vh7r69kgcki3/4UNxBx8yNR0ytwJgT3c1s2/1a67973b5cb22cbcf6e5f7f517bacec6/Web_150DPI-WeWork-167_North_Green_Reshoot-7.jpg?"
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}