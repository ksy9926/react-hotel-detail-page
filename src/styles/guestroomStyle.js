import styled from 'styled-components';

const GuestroomWrap = styled.article`
  padding: var(--size-large);
  margin: 10px 0;

  background: white;
`;

const RoomInfo = styled.div`
  display: flex;

  margin-bottom: var(--size-middle);
`;

const RoomOptions = styled.div``;

const ImgWrap = styled.div`
  flex: 4;

  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 10px;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;

  padding: var(--size-small);
  margin-left: 15px;
`;

const Title = styled.h4`
  flex: 2;

  margin: 0 0 10px;

  font-size: 1.2rem;
`;

const Personnel = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  color: var(--color-grey);
`;

const SizeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const Size = styled.div`
  display: flex;
  align-items: center;
`;

const Detail = styled.div`
  font-weight: bold;
  color: var(--color-blue);

  cursor: pointer;
`;

const Option = styled.div`
  padding: 10px;
  border: 1px solid var(--color-main-b);
  border-radius: 5px;
  margin-bottom: 10px;
`;

const TagWrap = styled.div`
  display: flex;

  margin-bottom: 10px;
`;

const Tag = styled.div`
  padding: 2px 5px;
  border: 1px solid rgb(145, 145, 166);
  margin-right: 5px;

  font-size: 0.8rem;
  font-weight: bold;
  color: rgb(145, 145, 166);
`;

const ReserveWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Warning = styled.div`
  align-self: start;
`;

const Badge = styled.div`
  padding: 5px 10px;
  border-radius: 5px;

  background: ${(props) => props.badge === '환불 불가' && 'rgb(253, 242, 241)'};
  font-weight: bold;
  color: ${(props) => (props.badge === '환불 불가' ? 'rgb(235, 87, 72)' : '#0f77dd')};

  &::after {
    content: ${(props) => props.badge === '무료 취소' && "'i'"};

    padding: 1px 7px;
    margin-left: 5px;
    border: 1px solid #0f77dd;
    border-radius: 50%;

    background: #0f77dd;
    color: white;
  }
`;

const FreeCancelDate = styled.div`
  padding: 5px 10px;
  color: #0f77dd;
`;

const PriceWrap = styled.div`
  text-align: right;
`;

const Discount = styled.div`
  font-size: 0.9rem;
  color: rgb(235, 83, 67);
`;

const Price = styled.div`
  margin: 5px 0;
`;

const PriceSpan = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const TaxPrice = styled.div`
  margin-bottom: 10px;

  font-size: 0.9rem;
  color: rgb(96, 96, 96);
`;

const ReserveBtn = styled.button`
  padding: 10px 40px;
  border-radius: 5px;

  background-color: rgb(235, 75, 96);
  font-size: 1.1rem;
  font-weight: bolder;
  color: white;

  cursor: pointer;
`;

export {
  GuestroomWrap,
  RoomInfo,
  RoomOptions,
  ImgWrap,
  Img,
  InfoWrap,
  Title,
  Personnel,
  SizeWrap,
  Size,
  Detail,
  Option,
  TagWrap,
  Tag,
  ReserveWrap,
  PriceWrap,
  Discount,
  Price,
  PriceSpan,
  TaxPrice,
  Warning,
  Badge,
  FreeCancelDate,
  ReserveBtn,
};
