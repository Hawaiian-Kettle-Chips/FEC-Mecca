const axios = require('axios');

const baseURL = process.env.PRODUCTS_API_URL;

module.exports = {
  getProductByID: (req, res) => {
    const url = `/products/${req.params.product_id}`;
    const options = {
      method: 'get',
      baseURL,
      url,
      headers: {
        Authorization: process.env.API_KEY,
      },
    };
    axios(options)
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch((err) => {
        res.sendStatus(404);
        console.log(err);
      });
  },

  getProductStylesByID: (req, res) => {
    const url = `/products/${req.params.product_id}/styles`;
    const options = {
      method: 'get',
      baseURL,
      url,
      headers: {
        Authorization: process.env.API_KEY,
      },
    };
    axios(options)
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch((err) => {
        res.sendStatus(404);
        console.log(err);
      });
  },

  getRelatedProductIDs: (req, res) => {
    const id = req.params.product_id;
    const url = `/products/${id}/related`;
    const options = {
      method: 'get',
      baseURL,
      url,
      headers: {
        Authorization: process.env.API_KEY,
      },
    };
    axios(options)
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },
};
