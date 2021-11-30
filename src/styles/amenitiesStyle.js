import styled from 'styled-components';

const AmenitiesWrap = styled.article`
  padding: 20px;
  margin: 10px 0;

  background: white;
`;

const Title = styled.h4`
  padding-bottom: 10px;
  border-bottom: 1px solid #e8e8e8;
  margin: 0 0 10px;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 20px;
`;

const Li = styled.li`
  display: flex;
  align-items: center;

  width: 33%;
  margin: 10px 0;
  color: rgb(142, 142, 180);
`;

const Amenity = styled.span`
  margin-left: 10px;
`;

const Toggle = styled.span`
  font-weight: 500;
  color: rgb(142, 142, 180);

  cursor: pointer;
`;

export { AmenitiesWrap, Title, Ul, Li, Amenity, Toggle };
