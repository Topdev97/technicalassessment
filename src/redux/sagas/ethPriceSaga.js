import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_ETHER_PRICE_REQUEST,
  fetchEtherPriceSuccess,
  fetchEtherPriceFailure,
} from '../actions/ethPriceActions';

const fetchEtherPriceAPI = async () => {
  const response = await axios.get(
    'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=B8CR1UNC3E7GU4AWPTT92444EJAWVDTU8V'
  );
  return response.data;
};

function* fetchEtherPrice() {
  try {
    const data = yield call(fetchEtherPriceAPI);

    if (data.status === '1') {
      const ethPrice = {
        ethusd: data.result.ethusd,
        ethbtc: data.result.ethbtc,
      };
      console.log("999", ethPrice)
      yield put(fetchEtherPriceSuccess(ethPrice));
    } else {
      yield put(fetchEtherPriceFailure('Failed to fetch Ether price'));
    }
  } catch (error) {
    yield put(fetchEtherPriceFailure(error.message));
  }
}

function* ethPriceSaga() {
  yield takeLatest(FETCH_ETHER_PRICE_REQUEST, fetchEtherPrice);
}

export default ethPriceSaga;
