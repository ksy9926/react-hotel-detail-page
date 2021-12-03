import { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { AmenitiesWrap, Title, Ul, Li, Amenity, Toggle } from 'styles/amenitiesStyle';
import { ArrowDownIcon, ArrowUpIcon } from 'icons/icons';
import { AMENITY_ICON } from 'constants/constants';

const Amenities = () => {
  const hotelInfo = useSelector((state) => state.hotelInfo, shallowEqual);
  const amenities = hotelInfo.amenities;
  const [more, setMore] = useState(false);

  const amenityList = amenities?.map((item, idx) => {
    if (!more && idx > 5) return <div key={item}></div>;

    const paths = AMENITY_ICON[item].map((path) => (
      <path key={path} fillRule="evenodd" clipRule="evenodd" d={path} fill="#222222" />
    ));

    return (
      <Li key={item}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {paths}
        </svg>
        <Amenity>{item}</Amenity>
      </Li>
    );
  });

  return (
    <AmenitiesWrap>
      <Title>편의시설 및 서비스</Title>
      <Ul>{amenityList}</Ul>
      <Toggle onClick={() => setMore(!more)}>
        {more ? <ArrowUpIcon /> : <ArrowDownIcon />}
        {more ? '접기' : '더 보기'}
      </Toggle>
    </AmenitiesWrap>
  );
};

export default Amenities;
