import { fetchRooms } from 'api/api';
import { call, put, takeEvery } from 'redux-saga/effects';

export const GET_ROOMS = 'GET_ROOMS';
export const GET_ROOMS_SUCCESS = 'GET_ROOMS_SUCCESS';

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
  } catch (e) {
    console.log('error 발생');
    yield put();
  }
}

// 사가들을 합치기
export function* roomsSaga() {
  yield takeEvery(GET_ROOMS, getRoomsSaga);
}
