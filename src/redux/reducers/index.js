import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import swapTransactionReducer from './fetchSwapTransactionReducer';
import ethPriceReducer from './ethPriceReducer';

const rootReducer = combineReducers({
  tokenReducer, // Add your reducers here
  swapTransactionReducer,
  ethPriceReducer

});

export default rootReducer;