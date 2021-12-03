import { GET_HOTELIMG_SUCCESS, GET_HOTELIMG_FAIL } from 'redux/actions/hotelImgAction';

// 초기값
const initialState = [];

// 호텔 이미지 정보 리듀서
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HOTELIMG_SUCCESS: {
      return payload;
    }
    case GET_HOTELIMG_FAIL: {
      return payload;
    }
    default:
      return state;
  }
};

export default reducer;
