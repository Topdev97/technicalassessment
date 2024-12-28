export const FETCH_ETHER_PRICE_REQUEST = "FETCH_ETHER_PRICE_REQUEST";
export const FETCH_ETHER_PRICE_SUCCESS = "FETCH_ETHER_PRICE_SUCCESS";
export const FETCH_ETHER_PRICE_FAILURE = "FETCH_ETHER_PRICE_FAILURE";

export const fetchEtherPriceRequest = () => ({
  type: FETCH_ETHER_PRICE_REQUEST,
});

export const fetchEtherPriceSuccess = (data) => ({
  type: FETCH_ETHER_PRICE_SUCCESS,
  payload: data,
});

export const fetchEtherPriceFailure = (error) => ({
  type: FETCH_ETHER_PRICE_FAILURE,
  payload: error,
});
