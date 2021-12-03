import { fetchHotelInfo } from 'api/api';
import { call, put, takeEvery } from 'redux-saga/effects';
import { SET_LOADING } from './loadingAction';

export const GET_HOTELINFO = 'GET_HOTELINFO';
export const GET_HOTELINFO_SUCCESS = 'GET_HOTELINFO_SUCCESS';
export const GET_HOTELINFO_FAIL = 'GET_HOTELINFO_FAIL';

// 호텔 정보 불러오기 액션
export const getHotelInfo = () => ({ type: GET_HOTELINFO });

// 사가들을 합치기
export function* hotelInfoSaga() {
  yield takeEvery(GET_HOTELINFO, getHotelInfoSaga);
}

// 호텔 정보 불러오기 사가
function* getHotelInfoSaga() {
  try {
    const hotelInfo = yield call(fetchHotelInfo);

    yield put({
      type: GET_HOTELINFO_SUCCESS,
      payload: hotelInfo[0],
    });

    yield put({
      type: SET_LOADING,
      payload: { info: false },
    });
  } catch (error) {
    yield put({
      type: GET_HOTELINFO_FAIL,
      payload: {
        status: 'error',
        message: '알 수 없는 오류로 호텔 정보를 불러오는데 실패하였습니다.',
      },
    });
  }
}
