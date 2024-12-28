import { all } from 'redux-saga/effects';
import tokenSaga from './tokenSaga';
import swapTransactionSaga from './fetchSwapTransactionSaga';
import ethPriceSaga from './ethPriceSaga';

function* rootSaga() {
  yield all([
    // List of all your saga watchers
    tokenSaga(),
    // Add more saga watchers here if needed
    swapTransactionSaga(),
    ethPriceSaga()
  ]);
}

export default rootSaga;