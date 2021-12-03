import styled from 'styled-components';
import 'index.css';

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

const LogoDiv = styled.div`
  display: flex;
  align-items: center;

  font-size: var(--font-very-large);
  font-weight: bold;
  color: var(--color-main-a);
`;

const NavDiv = styled.div`
  display: flex;

  font-weight: var(--weight-large);
`;

const Div = styled.div`
  margin-left: var(--size-middle);
`;

export { HeaderWrap, HeaderInnerWrap, LogoDiv, NavDiv, Div };
