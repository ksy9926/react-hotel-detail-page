import { HeaderWrap, HeaderInnerWrap, LogoDiv, NavDiv, Div } from 'styles/headerStyle';
import { TripbtozIcon } from 'icons/icons';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderInnerWrap>
        <LogoDiv>
          <TripbtozIcon />
          Tripbtoz
        </LogoDiv>
        <NavDiv>
          <Div>고객센터</Div>
          <Div>예약확인</Div>
          <Div>회원가입</Div>
          <Div>로그인</Div>
        </NavDiv>
      </HeaderInnerWrap>
    </HeaderWrap>
  );
};

export default Header;
