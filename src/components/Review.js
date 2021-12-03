import { useCallback, useMemo, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import {
  ReviewWrap,
  Title,
  Rating,
  SubInfo,
  ReviewCount,
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
import { Div, FlexBox } from 'styles/commonStyle';
import { ArrowDownIcon, ArrowUpIcon, TripAdvisorIcon } from 'icons/icons';

const Review = () => {
  const reviews = useSelector((state) => state.reviews, shallowEqual);
  const [more, setMore] = useState(Array(reviews.length).fill(false));
  const reviewInfo = reviews.info;
  const userReviews = reviews.data?.slice(0, 2);

  const moreHandler = useCallback(
    (idx) => {
      const newMore = [...more];
      newMore[idx] = !newMore[idx];
      setMore(newMore);
    },
    [more],
  );

  const rating = useMemo(
    () =>
      reviewInfo?.rating &&
      [1, 2, 3, 4, 5].map((item) => <Rating key={item} filled={reviewInfo?.rating - item} />),
    [reviewInfo],
  );

  const reviewList = useMemo(
    () =>
      userReviews?.map((item, idx) => {
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
              {more[idx] ? <ArrowUpIcon /> : <ArrowDownIcon />}
              {more[idx] ? '접기' : '더 보기'}
            </Toggle>
          </Li>
        );
      }),
    [userReviews, more, moreHandler],
  );

  return (
    <ReviewWrap>
      <Title>
        <FlexBox>
          리뷰
          <TripAdvisorIcon />
          <SubInfo>
            {rating}
            <ReviewCount>
              {reviewInfo?.rating}/5.0 (총 {reviewInfo?.total_review_count?.toLocaleString()}개의
              리뷰)
            </ReviewCount>
          </SubInfo>
        </FlexBox>
        <ReviewButton>리뷰쓰기</ReviewButton>
      </Title>
      <Ul>{reviewList}</Ul>
    </ReviewWrap>
  );
};

export default Review;
