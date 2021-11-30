import { useState, useEffect } from 'react';
import { AmenitiesWrap, Title, Ul, Li, Amenity, Toggle } from 'styles/amenitiesStyle';
import { I } from 'styles/commonStyle';
import { AMENITY_ICON } from 'constants/constants';

const url = 'http://localhost:4000/hotel';

const Amenities = () => {
  const [amenities, setAmenities] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setAmenities(res[0].amenities));
  }, []);

  const amenityList = amenities.map((item, idx) => {
    if (!seeMore && idx > 5) return <div key={item}></div>;

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
      <Toggle onClick={() => setSeeMore(!seeMore)}>
        <I className={`fas fa-chevron-${seeMore ? 'up' : 'down'}`}></I>{' '}
        {seeMore ? '접기' : '더 보기'}
      </Toggle>
    </AmenitiesWrap>
  );
};

export default Amenities;
