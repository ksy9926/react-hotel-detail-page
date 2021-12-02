import { fetchReviews } from 'api/api';
import { call, put, takeEvery } from 'redux-saga/effects';
import { SET_LOADING } from './loadingAction';

export const GET_REVIEWS = 'GET_REVIEWS';
export const GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS';

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
      payload: false,
    });
  } catch (e) {
    console.log('error 발생');
    yield put();
  }
}

// 사가들을 합치기
export function* reviewsSaga() {
  yield takeEvery(GET_REVIEWS, getReviewsSaga);
}
