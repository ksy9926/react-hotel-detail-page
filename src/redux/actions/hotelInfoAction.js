import { fetchHotelInfo } from 'api/api';
import { call, put, takeEvery } from 'redux-saga/effects';

export const GET_HOTELINFO = 'GET_HOTELINFO';
export const GET_HOTELINFO_SUCCESS = 'GET_HOTELINFO_SUCCESS';

// 호텔 정보 불러오기 액션
export const getHotelInfo = () => ({ type: GET_HOTELINFO });

// 호텔 정보 불러오기 사가
function* getHotelInfoSaga() {
  try {
    const hotelInfo = yield call(fetchHotelInfo);
    yield put({
      type: GET_HOTELINFO_SUCCESS,
      payload: hotelInfo[0],
    });
  } catch (e) {
    console.log('error 발생');
    yield put();
  }
}

// 사가들을 합치기
export function* hotelInfoSaga() {
  yield takeEvery(GET_HOTELINFO, getHotelInfoSaga);
}
