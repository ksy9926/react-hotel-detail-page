import styled from 'styled-components';

const GuestroomWrap = styled.article`
  padding: 20px;
  margin: 10px 0;

  background: white;
`;

const RoomInfo = styled.div`
  display: flex;

  margin-bottom: 10px;
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

  padding: 5px;
  margin-left: 15px;
`;

const Title = styled.h4`
  flex: 2;

  padding-bottom: 5px;
  margin: 0 0 10px;

  font-size: 1.2rem;
`;

const Personnel = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  color: rgb(101, 101, 101);
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

const SizeSvg = styled.svg`
  width: 24px;
  height: 24px;
  view-box: 0 0 24px 24px;
  fill: none;
  xmlns: https://www.w3.org/2000/svg;
`;

const SizePath = styled.path`
  fill-rule: evenodd;
  clip-rule: evenodd;
  d: M3.2 6.12812v17.8719l5.70982 20.8h18.2902l20.8 17.8719v6.12812l18.2902 3.2h5.70982l3.2
    6.12812zm5.1579 2l2 5.68421v18.3158l5.1579 22h18.8421l22 18.3158v5.68421l18.8421
    2h5.1579zm11.3704 7.07016l11.9704 7.07209l16.1574 7.08556l6.88307 16.3599l6.86937
    12.1011l6.86744 11.5011l5.66745 11.5049l5.66938 12.1049l5.68748 17.7339l5.68939 18.3301l6.28554
    18.332l11.9145 18.3501l12.5145 18.352l12.5184 17.152l11.9184 17.1501l7.80319 17.1368l17.0059
    7.93408l17.0194 12.1211l17.0213 12.7211l18.2213 12.7172l18.2194 12.1172l18.2013 6.48827l18.1994
    5.89212l17.6032 5.8902l11.9743 5.8721l11.3743 5.87017l11.3704 7.07016z;
  fill: #222222;
`;

const Detail = styled.div`
  font-weight: bold;
  color: rgb(54, 117, 214);

  cursor: pointer;
`;

const Option = styled.div`
  padding: 10px;
  border: 1px solid #eeeeee;
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
  SizeSvg,
  SizePath,
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
