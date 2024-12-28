const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=B8CR1UNC3E7GU4AWPTT92444EJAWVDTU8V'
    );

    const data = response.data;

    if (data.status === '1') {
      const ethPrice = {
        ethusd: data.result.ethusd,
        ethbtc: data.result.ethbtc,
      };

      res.json({
        ethPrice,
        success: 'ok',
      });
    } else {
      res.status(400).json({
        success: 'error',
        message: 'Failed to fetch Ether price',
        error: data.message || 'Unknown error',
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/details', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=B8CR1UNC3E7GU4AWPTT92444EJAWVDTU8V'
    );

    const data = response.data;

    if (data.status === '1') {
      res.json({
        ethPriceDetails: data.result,
        success: 'ok',
      });
    } else {
      res.status(400).json({
        success: 'error',
        message: 'Failed to fetch Ether price details',
        error: data.message || 'Unknown error',
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
