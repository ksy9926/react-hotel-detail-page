import React, { useState, useRef, useEffect } from 'react';
import {
  CarouselWrap,
  ImgWrap,
  NextButton,
  PrevButton,
  NextArrow,
  PrevArrow,
  Count,
} from 'styles/carouselStyle';
import { TOTAL_SLIDES } from 'constants/constants';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${currentSlide + 1}00%)`;
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide === TOTAL_SLIDES) {
      slideRef.current.style.transition = 'all 0.3s ease-in-out';
      setCurrentSlide(currentSlide + 1);
      setTimeout(() => {
        slideRef.current.style.transition = '0s';
        setCurrentSlide(0);
      }, 300);
    } else {
      slideRef.current.style.transition = 'all 0.3s ease-in-out';
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      slideRef.current.style.transition = 'all 0.3s ease-in-out';
      setCurrentSlide(currentSlide - 1);
      setTimeout(() => {
        slideRef.current.style.transition = '0s';
        setCurrentSlide(TOTAL_SLIDES);
      }, 300);
    } else {
      slideRef.current.style.transition = 'all 0.3s ease-in-out';
      setCurrentSlide(currentSlide - 1);
    }
  };

  const carousel = Array(30)
    .fill(0)
    .map((_, idx) => idx)
    .map((item) => (
      <img
        src={`./images/${item}.jpeg`}
        alt="테스트"
        key={item}
        style={{ width: '100%', height: '100%', flexShrink: 0 }}
      ></img>
    ));

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
          {currentSlide === -1 ? carousel.length : (currentSlide % carousel.length) + 1} /{' '}
          {carousel.length}
        </Count>
      </CarouselWrap>
    </>
  );
};

export default Carousel;
