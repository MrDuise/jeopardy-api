const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const questionsRouter = require('./routes/questions.route');

const app = express();


app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan('combined'));
app.use(express.json());

app.use('/questions', questionsRouter);

module.exports = app;