import { fetchReviews } from 'api/api';
import { call, put, takeEvery } from 'redux-saga/effects';
import { SET_LOADING } from './loadingAction';

export const GET_REVIEWS = 'GET_REVIEWS';
export const GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS';
export const GET_REVIEWS_FAIL = 'GET_REVIEWS_FAIL';

// 리뷰 정보 불러오기 액션
export const getReviews = () => ({ type: GET_REVIEWS });

// 리뷰 정보 불러오기 사가
function* getReviewsSaga() {
  try {
    const reviews = yield call(fetchReviews);

    yield put({
      type: GET_REVIEWS_SUCCESS,
      payload: reviews[0],
    });

    yield put({
      type: SET_LOADING,
      payload: { reviews: false },
    });
  } catch (e) {
    yield put({
      type: GET_REVIEWS_FAIL,
      payload: {
        status: 'error',
        message: '알 수 없는 오류로 리뷰 정보를 불러오는데 실패하였습니다.',
      },
    });
  }
}

// 사가들을 합치기
export function* reviewsSaga() {
  yield takeEvery(GET_REVIEWS, getReviewsSaga);
}
