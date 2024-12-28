import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEtherPriceRequest } from "../redux/actions/ethPriceActions";
import TopBar from "./TopBar";

const TestPage = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state); 

  console.log("Entire Redux state:", state.ethPriceReducer);

  const { ethPrice, loading, error } = state.ethPriceReducer || {};

  useEffect(() => {
    dispatch(fetchEtherPriceRequest());
  }, [dispatch]);

  const renderPrice = ethPrice ? (
    <div>
      <p>ETH to USD: ${ethPrice.ethusd}</p>
      <p>ETH to BTC: {ethPrice.ethbtc} BTC</p>
    </div>
  ) : null;

  return (
    <div>
      <TopBar />
      <div>
        <h1>TestPage Component</h1>
        {loading && <p>Loading Ether price...</p>}
        {error && <p>Error: {error}</p>}
        {renderPrice}
      </div>
    </div>
  );
};

export default TestPage;
