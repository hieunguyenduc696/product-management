const express = require("express");
require("dotenv").config();
const mongo = require("./config/mongo");
const { setupRoutes } = require("./config/routes");
const { setupMiddleware } = require("./config/preconfig");
const { port } = require("./constants");

const app = express();
const server = require("http").Server(app);

setupMiddleware(app);
setupRoutes(app);

mongo.connect();

server.listen(port, () => console.log(`Started on port ${port}...`));
