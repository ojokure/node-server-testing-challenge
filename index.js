
const server = require('./server');

const PORT = process.env.PORT || 6000;

server.listen("6000", () => {
  console.log(`server is running on port ${PORT}`);
});