const mongoose = require('mongoose');
const { mongoURI } = require('../constants');

// config connect mongodb
exports.connect = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName: 'ProductManagement',
    });
    console.log('db connection');
  }
  catch (error) {
    console.log(error);
  }
  return mongoose.connection;
};
