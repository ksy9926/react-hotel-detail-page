import styled from 'styled-components';

const HeaderWrap = styled.header`
  display: flex;
  justify-content: center;

  width: 100%;
`;

const HeaderInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 976px;
  height: 50px;

  padding: 19px 24px;
`;

const Div = styled.div``;

export { HeaderWrap, HeaderInnerWrap, Div };
