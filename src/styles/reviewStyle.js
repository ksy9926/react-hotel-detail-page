import styled, { css } from 'styled-components';

const ReviewWrap = styled.article`
  padding: 20px;
  margin: 10px 0;

  background: white;
`;

const Title = styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px;
`;

const SubInfo = styled.span`
  display: flex;
  align-items: center;

  font-size: 0.8rem;
  font-weight: 500;
`;

const ReviewCount = styled.span`
  margin-left: 5px;
`;

const Rating = styled.div`
  width: 15px;
  height: 15px;

  border-radius: 50%;
  border: 1px solid #00aa6c;
  margin: 0 2px;

  ${(props) => {
    if (props.filled >= 0) {
      return css`
        background: #00aa6c;
      `;
    } else if (props.filled === -0.5) {
      return css`
        background: linear-gradient(90deg, #00aa6c 50%, #ffffff 50%);
      `;
    } else {
      return css`
        background: #ffffff;
      `;
    }
  }}
`;

const ReviewButton = styled.button`
  padding: 7px 5px;
  border-radius: 3px;

  background: #000000;

  color: #ffffff;
  font-size: 0.8rem;

  cursor: pointer;
`;

const Ul = styled.ul``;

const Li = styled.li`
  padding-top: 30px;
  border-top: 1px solid #e8e8e8;
  margin-bottom: 30px;
`;

const Username = styled.span`
  margin-right: 10px;

  font-weight: bold;
`;

const PublishedDate = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: #c1c1c1;
`;

const Area = styled.div`
  margin-top: 5px;

  font-size: 0.8rem;
`;

const UserRating = styled.div`
  display: flex;

  margin: 15px 0 10px;
`;

const ReviewTitle = styled.div`
margin-bottom: 5px  
font-size: 1.2rem;
  font-weight: bold;
`;

const TravelDate = styled.div`
  margin-bottom: 10px;

  font-size: 0.9rem;
  color: #a1a1a1;
`;

const Content = styled.div`
  margin-bottom: 20px;
  color: #555555;
`;

const Toggle = styled.span`
  display: flex;
  align-items: center;

  font-weight: 500;
  color: rgb(142, 142, 180);

  cursor: pointer;
`;

export {
  ReviewWrap,
  Title,
  SubInfo,
  ReviewCount,
  Rating,
  ReviewButton,
  Ul,
  Li,
  Username,
  PublishedDate,
  Area,
  UserRating,
  ReviewTitle,
  TravelDate,
  Content,
  Toggle,
};
