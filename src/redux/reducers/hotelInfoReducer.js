import { GET_HOTELINFO_SUCCESS, GET_HOTELINFO_FAIL } from 'redux/actions/hotelInfoAction';

// 초기값
const initialState = {};

// 호텔 정보 리듀서
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_HOTELINFO_SUCCESS: {
      return payload;
    }
    case GET_HOTELINFO_FAIL: {
      return payload;
    }
    default:
      return state;
  }
};

export default reducer;
