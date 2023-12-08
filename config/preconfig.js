const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { jwtSecret } = require('../constants');

const setupMiddleware = (app) => {
  app.use(express.static('public'));
  app.use(express.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(bodyParser.json());
  app.use(cookieParser(jwtSecret));
};

module.exports = {
  setupMiddleware,
};
