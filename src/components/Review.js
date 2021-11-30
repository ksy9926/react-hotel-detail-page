import React, { useState, useEffect } from 'react';
import { ReviewWrap, Title, Rating, SubInfo, ReviewButton } from 'styles/reviewStyle';

const url = 'http://localhost:4000/reviews';

const Review = () => {
  const [reviewInfo, setReviewInfo] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => {
        setReviewInfo(res[0].info);
        setReviews(res[0].data);
      });
  }, []);

  const rating =
    reviewInfo.rating &&
    [1, 2, 3, 4, 5].map((item) => <Rating key={item} filled={reviewInfo.rating - item} />);

  const personalRating =
    reviews[0]?.rating &&
    [1, 2, 3, 4, 5].map((item) => <Rating key={item} filled={reviews[0].rating - item} />);

  return (
    <ReviewWrap>
      <Title>
        <div style={{ display: 'flex' }}>
          리뷰
          <SubInfo>
            {rating} {reviewInfo.rating}/5.0 (총 {reviewInfo.total_review_count?.toLocaleString()}
            개의 리뷰)
          </SubInfo>
        </div>
        <ReviewButton>리뷰쓰기</ReviewButton>
      </Title>
      <ul>
        <div>
          <span style={{ fontWeight: 'bold', marginRight: '10px' }}>{reviews[0]?.username}</span>
          <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#c1c1c1' }}>
            {reviews[0]?.published_date}
          </span>
        </div>
        <div style={{ fontSize: '0.8rem', marginTop: '5px' }}>서울, 대한민국</div>
        <div style={{ margin: '15px 0 10px', display: 'flex' }}>{personalRating}</div>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '5px' }}>
          {reviews[0]?.title}
        </div>
        <div style={{ fontSize: '0.9rem', color: '#a1a1a1', marginBottom: '10px' }}>
          방문일: {reviews[0]?.travel_date}
        </div>
        <div style={{ color: '#555555' }}>{reviews[0]?.content}</div>
      </ul>
    </ReviewWrap>
  );
};

export default Review;
