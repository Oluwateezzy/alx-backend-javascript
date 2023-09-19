const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2]).then((data) => {
      res.write(`Number of students: ${data.lines.length - 1}\n`);
      res.write(`Number of students in CS: ${data.csList.length}. List: ${data.csList.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.sweList.length}. List: ${data.sweList.join(', ')}\n`);
    }).catch((error) => {
      res.end(error.message);
    });
  }
});

app.listen(port, hostname);

module.exports = app;
