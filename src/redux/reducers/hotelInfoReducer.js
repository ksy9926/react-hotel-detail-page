import { GET_HOTELINFO_SUCCESS } from 'redux/actions/hotelInfoAction';

// 초기값
const initialState = {};

// 호텔 정보 리듀서
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_HOTELINFO_SUCCESS: {
      return payload;
    }
    default:
      return state;
  }
};

export default reducer;
