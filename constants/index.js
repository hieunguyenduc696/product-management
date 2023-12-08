const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const passRegex = /^[A-Za-z0-9/:@!#$^&_+*()[-`{-~]{6,24}/;

const port = process.env.PORT || 5000;
const { mongoURI } = process.env;
const { jwtSecret } = process.env;

module.exports = {
  emailRegex,
  passRegex,
  jwtSecret,
  mongoURI,
  port,
};
