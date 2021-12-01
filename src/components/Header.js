import { HeaderWrap, HeaderInnerWrap, Div } from 'styles/headerStyle';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderInnerWrap>
        <Div
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'rgb(255, 48, 82)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M95.3218 85.12V40.0655C95.3218 39.3452 95.021 38.6576 94.4921 38.1687L70.1694 15.6862C69.3799 14.9565 68.221 14.7921 67.2597 15.2734L21.4266 38.2213C20.5522 38.6591 20 39.5531 20 40.531V85.12C20 86.5465 21.1564 87.703 22.583 87.703H92.7388C94.1653 87.703 95.3218 86.5465 95.3218 85.12Z"
              fill="#FF375C"
            />
            <path
              d="M109.277 79.474L62.6001 49.2108C60.9433 48.1365 58.7445 49.314 58.7445 51.2755V111.802C58.7445 113.763 60.9433 114.941 62.6001 113.867L109.277 83.6035C110.779 82.6293 110.779 80.4482 109.277 79.474Z"
              fill="#C3FF00"
            />
          </svg>
          Tripbtoz
        </Div>
        <Div style={{ display: 'flex', fontWeight: 700 }}>
          <Div style={{ marginLeft: '10px' }}>고객센터</Div>
          <Div style={{ marginLeft: '10px' }}>예약확인</Div>
          <Div style={{ marginLeft: '10px' }}>회원가입</Div>
          <Div style={{ marginLeft: '10px' }}>로그인</Div>
        </Div>
      </HeaderInnerWrap>
    </HeaderWrap>
  );
};

export default Header;
