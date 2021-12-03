import styled from 'styled-components';

const CarouselWrap = styled.article`
  position: relative;

  height: 350px;
  width: 100%;

  overflow: hidden;
`;

const ImgWrap = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  flex-shrink: 0;

  width: 100%;
  height: 100%;

  background: var(--color-green);
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: var(--size-large);
  transform: translateY(-50%);

  width: 30px;
  height: 30px;

  border-radius: 50%;

  cursor: pointer;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: var(--size-large);
  transform: translateY(-50%);

  width: 30px;
  height: 30px;

  border-radius: 50%;

  cursor: pointer;
`;

const PrevArrow = styled.div`
  position: relative;
  left: 2px;

  width: 10px;
  height: 10px;

  border-top: 1px solid black;
  border-right: 1px solid black;
  margin: 0 auto;

  transform: rotate(225deg);
`;

const NextArrow = styled.div`
  position: relative;
  right: 2px;

  width: 10px;
  height: 10px;

  border-top: 1px solid black;
  border-right: 1px solid black;
  margin: 0 auto;

  transform: rotate(45deg);
`;

const Count = styled.div`
  position: absolute;

  left: 50%;
  bottom: var(--size-large);
  transform: translateX(-50%);

  padding: 4px 12px;
  border-radius: 15px;

  background: var(--color-black-light);
  color: #ffffff;
`;

export { CarouselWrap, ImgWrap, Img, PrevButton, NextButton, PrevArrow, NextArrow, Count };
