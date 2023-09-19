const http = require('http');
// const app = hhtp()
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!\n');
});

app.listen(1245, '127.0.0.1');
module.exports = app;
