import {
    FETCH_ETHER_PRICE_REQUEST,
    FETCH_ETHER_PRICE_SUCCESS,
    FETCH_ETHER_PRICE_FAILURE,
  } from '../actions/ethPriceActions';
  
  const initialState = {
    ethPrice: {
        ethusd: '0',
        ethbtc: '0'
    },  
    loading: false,
    error: null,
  };
  
  const ethPriceReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ETHER_PRICE_REQUEST:
        return { ...state, loading: true };
      case FETCH_ETHER_PRICE_SUCCESS:
        return { ...state, loading: false, ethPrice: action.payload };
      case FETCH_ETHER_PRICE_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default ethPriceReducer;
  