// const { rejects } = require('assert');
const fs = require('fs');

async function countStudents(path) {
  let read;
  try {
    read = await fs.promises.readFile(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const lines = read.split('\n');
  let csCount = 0;
  let sweCount = 0;
  const csList = [];
  const sweList = [];
  for (const line of lines) {
    if (line.trim() !== '') {
      const fields = line.split(',');
      if (fields[3].trim() === 'CS') {
        csCount += 1;
        csList.push(fields[0]);
      }
      if (fields[3].trim() === 'SWE') {
        sweCount += 1;
        sweList.push(fields[0]);
      }
    }
  }
  console.log(`Number of students: ${lines.length - 1}`);
  console.log(`Number of students in CS: ${csCount}. List: ${csList.join(', ')}`);
  console.log(`Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);
  return { lines, csList, sweList };
}

module.exports = countStudents;
