const axios = require('axios');
const querystring = require('querystring');
const httpBuildQuery = require('http-build-query');

module.exports = (method, params) => {
  const get = arguments[2] !== undefined ? arguments[2] : false;
  params.v = params.v || '5.67';

  return get
    ? axios.get(`https://api.vk.com/method/${method}?${httpBuildQuery(params)}`)
    : axios.post(
        `https://api.vk.com/method/${method}`,
        querystring.stringify(params)
      );
};
