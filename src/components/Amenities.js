import { useState, useEffect } from 'react';
import { AmenitiesWrap, Title, Ul, Li, Amenity, Toggle } from 'styles/amenitiesStyle';
import { I } from 'styles/commonStyle';

const url = 'http://localhost:4000/hotel';
const AMENITY_ICON = {
  와이파이: 'wifi',
  수영장: 'swimmer',
  주차장: 'parking',
  레스토랑: 'utensils',
};

const Amenities = () => {
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setAmenities(res[0].amenities));
  }, []);

  const amenityList = amenities.map((item) => (
    <Li key={item}>
      <I className={`fas fa-${AMENITY_ICON[item]}`}></I> <Amenity>{item}</Amenity>
    </Li>
  ));

  return (
    <AmenitiesWrap>
      <Title>편의시설 및 서비스</Title>
      <Ul>{amenityList}</Ul>
      <Toggle>
        <I className="fas fa-chevron-down"></I> 더 보기
      </Toggle>
    </AmenitiesWrap>
  );
};

export default Amenities;
