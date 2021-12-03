import { all } from '@redux-saga/core/effects';
import { hotelInfoSaga } from 'redux/actions/hotelInfoAction';
import { roomsSaga } from 'redux/actions/roomsAction';
import { reviewsSaga } from 'redux/actions/reviewsAction';
import { hotelImgSaga } from 'redux/actions/hotelImgAction';
import hotelInfo from 'redux/reducers/hotelInfoReducer';
import hotelImg from 'redux/reducers/hotelImgReducer';
import rooms from 'redux/reducers/roomsReducer';
import reviews from 'redux/reducers/reviewsReducer';
import loading from 'redux/reducers/loadingReducer';

const reducers = {
  hotelInfo,
  hotelImg,
  rooms,
  loading,
  reviews,
};

export function* rootSaga() {
  yield all([hotelInfoSaga(), roomsSaga(), reviewsSaga(), hotelImgSaga()]);
}

export default reducers;
