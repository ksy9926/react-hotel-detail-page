import { useEffect, useState } from 'react';
import {
  HotelWrap,
  HotelStar,
  HotelName,
  HotelAddress,
  HotelRating,
  Rating,
  HotelReview,
  HotelTag,
  Tag,
} from 'styles/hotelInfoStyle';

const url = 'http://localhost:4000/hotel';

const HotelInfo = () => {
  const [hotelInfo, setHotelInfo] = useState({});

  useEffect(() => {
    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setHotelInfo(res[0]));
  }, []);

  const rating =
    hotelInfo.ratings &&
    [1, 2, 3, 4, 5].map((item) => <Rating key={item} filled={hotelInfo.ratings - item} />);

  const hotelTag = hotelInfo.tags?.map((item) => <Tag key={item}>#{item}</Tag>);

  return (
    <HotelWrap>
      <HotelStar>{hotelInfo.star}성급</HotelStar>
      <HotelName>{hotelInfo.name}</HotelName>
      <HotelAddress>{hotelInfo.address}</HotelAddress>
      <HotelRating>
        {rating}
        <HotelReview>총 {hotelInfo.reviews?.toLocaleString()}건의 리뷰</HotelReview>
      </HotelRating>
      <HotelTag>{hotelTag}</HotelTag>
    </HotelWrap>
  );
};

export default HotelInfo;
