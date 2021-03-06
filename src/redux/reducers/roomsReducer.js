import { GET_ROOMS_SUCCESS, GET_ROOMS_FAIL } from 'redux/actions/roomsAction';

// 초기값
const initialState = {};

// 객실 정보 리듀서
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ROOMS_SUCCESS: {
      return payload;
    }
    case GET_ROOMS_FAIL: {
      return payload;
    }
    default:
      return state;
  }
};

export default reducer;
