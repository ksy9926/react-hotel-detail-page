import { GET_LOADING, SET_LOADING } from 'redux/actions/loadingAction';

// 초기값
const initialState = true;

// 호텔 정보 리듀서
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_LOADING: {
      return state;
    }
    case SET_LOADING: {
      return payload;
    }
    default:
      return state;
  }
};

export default reducer;
