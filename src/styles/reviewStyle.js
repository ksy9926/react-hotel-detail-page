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

  padding-bottom: 10px;
  border-bottom: 1px solid #e8e8e8;
  margin: 0 0 10px;
`;

const SubInfo = styled.span`
  display: flex;
  align-items: center;

  margin-left: 10px;

  font-size: 0.8rem;
  font-weight: 500;
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

export { ReviewWrap, Title, SubInfo, Rating, ReviewButton };
