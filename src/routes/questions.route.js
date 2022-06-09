const express = require('express');


const {httpGetAllQuestions,} = require('./questions.controller');

const questionsRouter = express.Router();

// /questions
questionsRouter.get('/', httpGetAllQuestions);
//questionsRouter.post('/', httpPostQuestion);

// /questions/:id
//questionsRouter.get('/:id', httpGetQuestionById);
//questionsRouter.put('/:id', httpPutQuestion);
//questionsRouter.delete('/:id', httpDeleteQuestion);

module.exports = questionsRouter;