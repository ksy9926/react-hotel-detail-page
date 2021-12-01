import React, { useState, useEffect } from 'react';
import { api } from 'api/api';
import {
  ReviewWrap,
  Title,
  Rating,
  SubInfo,
  ReviewButton,
  Ul,
  Li,
  Username,
  PublishedDate,
  Area,
  UserRating,
  ReviewTitle,
  TravelDate,
  Content,
  Toggle,
} from 'styles/reviewStyle';
import { Div, FlexBox, I } from 'styles/commonStyle';

const Review = () => {
  const [reviewInfo, setReviewInfo] = useState({});
  const [reviews, setReviews] = useState([]);
  const [more, setMore] = useState([]);

  useEffect(() => {
    fetch(api + '/reviews', { method: 'GET' })
      .then((res) => res.json())
      .then((res) => {
        setReviewInfo(res[0].info);
        setReviews(res[0].data.slice(0, 2));
        setMore(Array(reviews.length).fill(false));
      });
  }, []);

  const moreHandler = (idx) => {
    const newMore = [...more];
    newMore[idx] = !newMore[idx];
    setMore(newMore);
  };

  const rating =
    reviewInfo.rating &&
    [1, 2, 3, 4, 5].map((item) => <Rating key={item} filled={reviewInfo.rating - item} />);

  const reviewList = reviews.map((item, idx) => {
    const personalRating = [1, 2, 3, 4, 5].map((rate) => (
      <Rating key={rate} filled={item.rating - rate} />
    ));

    return (
      <Li key={idx}>
        <Div>
          <Username>{item.username}</Username>
          <PublishedDate>{item.published_date}</PublishedDate>
        </Div>
        <Area>서울, 대한민국</Area>
        <UserRating>{personalRating}</UserRating>
        <ReviewTitle>{item.title}</ReviewTitle>
        <TravelDate>방문일: {item.travel_date}</TravelDate>
        <Content className={more[idx] ? '' : 'hidden'}>{item.content}</Content>
        <Toggle onClick={() => moreHandler(idx)}>
          <I className={`fas fa-chevron-${more[idx] ? 'up' : 'down'}`}></I>{' '}
          {more[idx] ? '접기' : '더 보기'}
        </Toggle>
      </Li>
    );
  });

  return (
    <ReviewWrap>
      <Title>
        <FlexBox>
          리뷰
          <SubInfo>
            {rating} {reviewInfo.rating}/5.0 (총 {reviewInfo.total_review_count?.toLocaleString()}
            개의 리뷰)
          </SubInfo>
        </FlexBox>
        <ReviewButton>리뷰쓰기</ReviewButton>
      </Title>
      <Ul>{reviewList}</Ul>
    </ReviewWrap>
  );
};

export default Review;
