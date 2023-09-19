const fs = require('fs');

async function readDatabase(path) {
  let read;
  try {
    read = await fs.promises.readFile(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const lines = read.split('\r\n').slice(1);
  const fields = lines.map((line) => line.split(',')[3]);
  const setFields = new Set(fields);
  const data = {};
  for (const setField of setFields) {
    data[setField] = [];
  }
  const formatLine = lines.map((line) => line.split(','));
  for (const line of formatLine) {
    data[line[3]].push(line[0]);
  }
  return data;
}
module.exports = readDatabase;
