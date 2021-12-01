import { useState, useEffect } from 'react';
import { getFreeCancelDate } from 'utils/date';
import { api } from 'api/api';
import {
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
} from 'styles/guestroomStyle';

const Guestroom = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(api + '/rooms', { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setRooms(res));
  }, []);

  const tags = rooms[0]?.options[0].tags?.map((item) => <Tag key={item}>{item}</Tag>);

  const options = rooms[0]?.options.map((item, idx) => (
    <Option key={idx}>
      <TagWrap>{tags}</TagWrap>
      <ReserveWrap>
        <Warning>
          <Badge badge={item.warning}>{item.warning}</Badge>
          {item.warning === '무료 취소' && (
            <FreeCancelDate>{getFreeCancelDate()} 전까지</FreeCancelDate>
          )}
        </Warning>
        <PriceWrap>
          <Discount>{item.discount}</Discount>
          <Price>
            1박 <PriceSpan>{item.price.toLocaleString()} 원</PriceSpan>
          </Price>
          <TaxPrice>세금 및 봉사료 포함 {item.tax_price.toLocaleString()}원</TaxPrice>
          <ReserveBtn>예약</ReserveBtn>
        </PriceWrap>
      </ReserveWrap>
    </Option>
  ));

  return (
    <GuestroomWrap>
      <RoomInfo>
        <ImgWrap>
          <Img
            alt="guestroom"
            src={rooms[0]?.images[Math.floor(Math.random() * rooms[0].images.length)]}
          />
        </ImgWrap>
        <InfoWrap>
          <Title>{rooms[0]?.title}</Title>
          <Personnel>
            최대 {rooms[0]?.personnel}인 / {rooms[0]?.bed}
          </Personnel>
          <SizeWrap>
            <Size>
              <SizeSvg>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.2 6.12812V17.8719L5.70982 20.8H18.2902L20.8 17.8719V6.12812L18.2902 3.2H5.70982L3.2 6.12812ZM5.1579 2L2 5.68421V18.3158L5.1579 22H18.8421L22 18.3158V5.68421L18.8421 2H5.1579ZM11.3704 7.07016L11.9704 7.07209L16.1574 7.08556L6.88307 16.3599L6.86937 12.1011L6.86744 11.5011L5.66745 11.5049L5.66938 12.1049L5.68748 17.7339L5.68939 18.3301L6.28554 18.332L11.9145 18.3501L12.5145 18.352L12.5184 17.152L11.9184 17.1501L7.80319 17.1368L17.0059 7.93408L17.0194 12.1211L17.0213 12.7211L18.2213 12.7172L18.2194 12.1172L18.2013 6.48827L18.1994 5.89212L17.6032 5.8902L11.9743 5.8721L11.3743 5.87017L11.3704 7.07016Z"
                  fill="#222222"
                />
              </SizeSvg>
              객실면적 {rooms[0]?.size}제곱미터
            </Size>
            <Detail>자세히 보기 {'>'}</Detail>
          </SizeWrap>
        </InfoWrap>
      </RoomInfo>
      <RoomOptions>{options && options}</RoomOptions>
    </GuestroomWrap>
  );
};

export default Guestroom;
