import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from 'redux/reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initStates) =>
  createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다.
// 주의: 스토어 생성이 된 다음에 위 코드를 실행해야합니다.

export default configureStore;
