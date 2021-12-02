import { GET_REVIEWS_SUCCESS } from 'redux/actions/reviewsAction';

// 초기값
const initialState = {};

// 리뷰 정보 리듀서
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_REVIEWS_SUCCESS: {
      return payload;
    }
    default:
      return state;
  }
};

export default reducer;
