import { fetchRooms } from 'api/api';
import { call, put, takeEvery } from 'redux-saga/effects';
import { SET_LOADING } from './loadingAction';

export const GET_ROOMS = 'GET_ROOMS';
export const GET_ROOMS_SUCCESS = 'GET_ROOMS_SUCCESS';
export const GET_ROOMS_FAIL = 'GET_ROOMS_FAIL';

// 객실 정보 불러오기 액션
export const getRooms = () => ({ type: GET_ROOMS });

// 객실 정보 불러오기 사가
function* getRoomsSaga() {
  try {
    const rooms = yield call(fetchRooms);
    yield put({
      type: GET_ROOMS_SUCCESS,
      payload: rooms[0],
    });

    yield put({
      type: SET_LOADING,
      payload: { rooms: false },
    });
  } catch (e) {
    yield put({
      type: GET_ROOMS_FAIL,
      payload: {
        status: 'error',
        message: '알 수 없는 오류로 객실 정보를 불러오는데 실패하였습니다.',
      },
    });
  }
}

// 사가들을 합치기
export function* roomsSaga() {
  yield takeEvery(GET_ROOMS, getRoomsSaga);
}
