import { fetchHotelImg } from 'api/api';
import { call, put, takeEvery } from 'redux-saga/effects';
import { SET_LOADING } from './loadingAction';

export const GET_HOTELIMG = 'GET_HOTELIMG';
export const GET_HOTELIMG_SUCCESS = 'GET_HOTELIMG_SUCCESS';
export const GET_HOTELIMG_FAIL = 'GET_HOTELIMG_FAIL';

// 호텔 이미지 불러오기 액션
export const getHotelImg = () => ({ type: GET_HOTELIMG });

// 사가들을 합치기
export function* hotelImgSaga() {
  yield takeEvery(GET_HOTELIMG, getHotelImgSaga);
}

// 호텔 이미지 불러오기 사가
function* getHotelImgSaga() {
  try {
    const hotelImg = yield call(fetchHotelImg);

    yield put({
      type: GET_HOTELIMG_SUCCESS,
      payload: hotelImg,
    });

    yield put({
      type: SET_LOADING,
      payload: { img: false },
    });
  } catch (error) {
    yield put({
      type: GET_HOTELIMG_FAIL,
      payload: {
        status: 'error',
        message: '알 수 없는 오류로 호텔 이미지를 불러오는데 실패하였습니다.',
      },
    });
  }
}
