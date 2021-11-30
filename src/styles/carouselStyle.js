import styled from 'styled-components';

const CarouselWrap = styled.div`
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

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);

  width: 30px;
  height: 30px;

  border-radius: 50%;

  cursor: pointer;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
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
  bottom: 20px;
  transform: translateX(-50%);

  padding: 4px 12px;
  border-radius: 15px;

  background: #222222b3;
  color: white;
`;

export { CarouselWrap, ImgWrap, PrevButton, NextButton, PrevArrow, NextArrow, Count };
