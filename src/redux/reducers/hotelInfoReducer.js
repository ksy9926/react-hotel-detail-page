import { SET_HOTELINFO } from 'redux/actions/hotelInfoAction';

const reducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_HOTELINFO: {
      return payload;
    }
    default:
      return state;
  }
};

export default reducer;
