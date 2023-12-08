const jwt = require('jsonwebtoken');
const { isTokenValid } = require('../config/helper');
const { jwtSecret } = require('../constants');

function authMiddleware(req, res, next) {
  const { token } = req.signedCookies;

  if (!isTokenValid(token)) {
    return res.status(401).json({
      status: 401,
      msg: 'No token, authorization denied',
    });
  }
  try {
    const decodedToken = jwt.verify(token, jwtSecret);
    req.user = decodedToken;
    return next();
  }
  catch (e) {
    return res.status(400).json({
      status: 400,
      msg: 'Token is invalid',
    });
  }
}

module.exports = authMiddleware;
