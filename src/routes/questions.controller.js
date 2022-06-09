const {getAllQuestions} = require('../models/questions.model');

function httpGetAllQuestions(req, res) {
    return res.status(200).json(getAllQuestions());
}




//function httpGetQuestionById(req, res) {}

//function httpPostQuestion(req, res) {}

//function httpPutQuestion(req, res) {}

//function httpDeleteQuestion(req, res) {}


module.exports = {
    httpGetAllQuestions,
    //httpGetQuestionById,
    //httpPostQuestion,
    //httpPutQuestion,
    //httpDeleteQuestion
}