const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  await countStudents(process.argv[2]).then((data) => {
    res.write(`Number of students: ${data.lines.length - 1}\n`);
    res.write(`Number of students in CS: ${data.csList.length}. List: ${data.csList.join(', ')}\n`);
    res.write(`Number of students in SWE: ${data.sweList.length}. List: ${data.sweList.join(', ')}\n`);
  }).catch((err) => res.write(err.message))
    .finally(() => {
      res.end();
    });
});

const PORT = 1245;
const hostname = '127.0.0.1';
app.listen(PORT, () => {
  console.log(`Server running at http://${hostname}:${PORT}`);
});
module.exports = app;
