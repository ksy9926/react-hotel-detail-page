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

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);
  const lastSlide = images.length - 1;
  const slideRef = useRef();

  useEffect(() => {
    fetch('https://picsum.photos/v2/list', { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setImages(res.map((data) => data.download_url)));
  }, []);

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

  const carousel = images.map((url) => (
    <img
      src={url}
      alt="테스트"
      key={url}
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
