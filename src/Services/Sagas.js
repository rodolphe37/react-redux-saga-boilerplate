import { fork } from 'redux-saga/effects';
import watchStuff from './Stuff/sagas';

const sagas = [
  watchStuff,
];

function* rootSaga() {
  yield [sagas.map(saga=>fork(saga))];
}
 export default rootSaga;
