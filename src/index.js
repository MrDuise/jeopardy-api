const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config.js');

const PORT = process.env.PORT || config.app.port;

const server = http.createServer(app);

/*
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});
*/
 function startServer() {
  //await mongoose.connect(config.mongoDB.url);

  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

startServer();
