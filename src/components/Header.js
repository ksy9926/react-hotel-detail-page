import { HeaderWrap, HeaderInnerWrap, Div } from 'styles/headerStyle';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderInnerWrap>
        <Div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'rgb(255, 48, 82)' }}>
          Tripbtoz
        </Div>
        <Div style={{ display: 'flex' }}>
          <Div>고객센터</Div>
          <Div>예약확인</Div>
          <Div>회원가입</Div>
          <Div>로그인</Div>
        </Div>
      </HeaderInnerWrap>
    </HeaderWrap>
  );
};

export default Header;
