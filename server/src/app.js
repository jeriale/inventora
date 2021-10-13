const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const app = express();
const cors = require("cors");

const tasksRouter = require('./tasks/tasks.router');

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

app.use(cors());
app.use(express.json());

app.use('/tasks', tasksRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;