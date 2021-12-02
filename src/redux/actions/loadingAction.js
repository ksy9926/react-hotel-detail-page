export const GET_LOADING = 'GET_LOADING';
export const SET_LOADING = 'SET_LOADING';

// 로딩 정보 불러오기 액션
export const getLoading = () => ({ type: GET_LOADING });
export const setLoading = (newState) => ({ type: SET_LOADING, payload: newState });
