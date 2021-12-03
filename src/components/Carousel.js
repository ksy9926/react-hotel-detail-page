import React, { useState, useRef, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import {
  CarouselWrap,
  ImgWrap,
  Img,
  NextButton,
  PrevButton,
  NextArrow,
  PrevArrow,
  Count,
} from 'styles/carouselStyle';

const Carousel = () => {
  const images = useSelector((state) => state.hotelImg, shallowEqual);
  const [currentSlide, setCurrentSlide] = useState(0);
  const lastSlide = images.length - 1;
  const slideRef = useRef();

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${currentSlide + 1}00%)`;
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide === lastSlide) {
      slideRef.current.style.transition = 'all 0.3s ease';
      setCurrentSlide(currentSlide + 1);
      setTimeout(() => {
        slideRef.current.style.transition = '0s';
        setCurrentSlide(0);
      }, 300);
    } else {
      slideRef.current.style.transition = 'all 0.3s ease';
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      slideRef.current.style.transition = 'all 0.3s ease-in-out';
      setCurrentSlide(currentSlide - 1);
      setTimeout(() => {
        slideRef.current.style.transition = '0s';
        setCurrentSlide(lastSlide);
      }, 300);
    } else {
      slideRef.current.style.transition = 'all 0.3s ease-in-out';
      setCurrentSlide(currentSlide - 1);
    }
  };

  const carousel = images.map((url) => <Img src={url} alt="테스트" key={url}></Img>);

  return (
    <>
      <CarouselWrap>
        <ImgWrap ref={slideRef}>
          {carousel[carousel.length - 1]}
          {carousel}
          {carousel[0]}
        </ImgWrap>
        <PrevButton onClick={prevSlide}>
          <PrevArrow />
        </PrevButton>
        <NextButton onClick={nextSlide}>
          <NextArrow />
        </NextButton>
        <Count>
          {images.length
            ? currentSlide === -1
              ? images.length + ' / ' + images.length
              : (currentSlide % images.length) + 1 + ' / ' + images.length
            : 'loading...'}
        </Count>
      </CarouselWrap>
    </>
  );
};

export default Carousel;
