import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';

const Corousel = () => {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={50}
            totalSlides={3}
            isPlaying={true}
            className="corousel"
        >
            <Slider>
                <Slide index={0}><img src='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg' /></Slide>
                <Slide index={1}><img src='https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg' /></Slide>
                <Slide index={2}><img src='https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg' /></Slide>
            </Slider>
        </CarouselProvider>
    )
}

export default Corousel