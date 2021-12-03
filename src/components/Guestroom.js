import { shallowEqual, useSelector } from 'react-redux';
import { getFreeCancelDate } from 'utils/date';
import { SizeIcon } from 'icons/icons';
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
  const rooms = useSelector((state) => state.rooms, shallowEqual);

  const options = rooms.options?.map((item, idx) => {
    const tags = item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>);

    return (
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
    );
  });

  return (
    <GuestroomWrap>
      <RoomInfo>
        <ImgWrap>
          <Img
            alt="guestroom"
            src={
              rooms.images?.length && rooms.images[Math.floor(Math.random() * rooms.images.length)]
            }
          />
        </ImgWrap>
        <InfoWrap>
          <Title>{rooms.title}</Title>
          <Personnel>
            최대 {rooms.personnel}인 / {rooms.bed}
          </Personnel>
          <SizeWrap>
            <Size>
              <SizeIcon />
              객실면적 {rooms.size}제곱미터
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
