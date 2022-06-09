const { gameData } = require ('../data/gameData');

const getAllQuestions = () => {
  const allQuestions = [];
  gameData.categories.forEach(({ questions }) => {
    questions.forEach((question) => {
      allQuestions.push(question);
    });
  });
  return allQuestions;
};

module.exports = {
  getAllQuestions,
};
