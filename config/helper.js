const { isEmpty } = require('lodash');

const isTokenValid = (token) => token && !isEmpty(token);

module.exports = {
  isTokenValid,
};
