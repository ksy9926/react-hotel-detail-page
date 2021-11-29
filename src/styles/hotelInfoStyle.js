import styled, { css } from 'styled-components';

const HotelWrap = styled.article`
  padding: 20px;

  background: white;
`;

const HotelStar = styled.span`
  padding: 2px 5px;
  border: 1px solid black;
  border-radius: 3px;

  font-size: 0.8rem;
`;

const HotelName = styled.h3`
  margin: 10px 0;
`;

const HotelAddress = styled.div`
  margin-bottom: 10px;

  font-size: 0.8rem;
`;

const HotelRating = styled.div`
  display: flex;

  margin-bottom: 10px;
`;

const Rating = styled.div`
  width: 15px;
  height: 15px;

  border-radius: 50%;
  border: 1px solid #00aa6c;
  margin: 0 2px;

  ${(props) =>
    props.filled &&
    css`
      background: #00aa6c;
    `}
`;

const HotelReview = styled.div`
  margin-left: 8px;

  line-height: 17px;
  font-size: 0.7rem;
`;

const HotelTag = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.li`
  padding: 3px 8px;
  border-radius: 10px;
  margin: 8px 10px 0 0;

  background: rgb(245, 245, 245);
  font-size: 0.9rem;
`;

export {
  HotelWrap,
  HotelName,
  HotelStar,
  HotelAddress,
  HotelRating,
  Rating,
  HotelReview,
  HotelTag,
  Tag,
};
