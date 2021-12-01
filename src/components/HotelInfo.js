import { useEffect, useState } from 'react';
import { api } from 'api/api';
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

const HotelInfo = () => {
  const [hotelInfo, setHotelInfo] = useState({});

  useEffect(() => {
    fetch(api + '/hotel', { method: 'GET' })
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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 6.98629L20.3648 8.78712C21.4046 9.74481 21.9965 11.1025 21.9948 12.5255C21.9948 15.3192 19.7556 17.5839 16.9959 17.5839C15.7367 17.5857 14.5237 17.1043 13.6011 16.2368L12.0001 18L10.3981 16.2356C9.08412 17.4613 7.22368 17.8835 5.5186 17.3429C3.81352 16.8024 2.5233 15.3814 2.13468 13.616C1.74605 11.8505 2.31817 10.0094 3.6352 8.78712L2 6.98629H5.63419C9.47833 4.3379 14.5312 4.3379 18.3753 6.98629H22ZM3.62051 12.5255C3.62051 14.4161 5.13449 15.9487 7.00209 15.9487C7.89894 15.9487 8.75906 15.5881 9.39323 14.9461C10.0274 14.3041 10.3837 13.4334 10.3837 12.5255C10.3837 10.6349 8.86968 9.10232 7.00209 9.10232C5.13449 9.10232 3.62051 10.6349 3.62051 12.5255ZM12.0001 12.427C12.0001 10.1742 10.3814 8.24127 8.24671 7.41463C10.6487 6.40168 13.3508 6.40168 15.7527 7.41463C13.6183 8.24156 12.0001 10.1745 12.0001 12.427ZM16.9959 9.10232C15.1283 9.10232 13.6143 10.6349 13.6143 12.5255C13.6143 14.4161 15.1283 15.9487 16.9959 15.9487C18.8635 15.9487 20.3775 14.4161 20.3775 12.5255C20.3775 10.6349 18.8635 9.10232 16.9959 9.10232ZM16.9959 10.7311C16.2788 10.7311 15.6323 11.1684 15.3579 11.8391C15.0835 12.5097 15.2353 13.2817 15.7424 13.795C16.2495 14.3082 17.0121 14.4617 17.6745 14.1838C18.337 13.9059 18.7689 13.2514 18.7688 12.5255C18.7688 12.0496 18.582 11.5931 18.2495 11.2566C17.917 10.92 17.4661 10.731 16.9959 10.7311ZM7.68074 14.1838C8.34321 13.9059 8.77509 13.2514 8.77497 12.5255C8.77481 11.5344 7.98111 10.7311 7.00209 10.7311C6.285 10.7311 5.63852 11.1684 5.36413 11.8391C5.08974 12.5097 5.24147 13.2817 5.74857 13.795C6.25567 14.3082 7.01827 14.4617 7.68074 14.1838Z"
            fill="#222222"
          />
        </svg>
        {rating}
        <HotelReview>총 {hotelInfo.reviews?.toLocaleString()}건의 리뷰</HotelReview>
      </HotelRating>
      <HotelTag>{hotelTag}</HotelTag>
    </HotelWrap>
  );
};

export default HotelInfo;
