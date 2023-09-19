const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write('This is the list of our students\n');
    readDatabase('./database').then((data) => {
      response.write(`Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`);
      response.write(`Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}\n`);
      response.end();
    }).catch((err) => response.write(err.message))
      .finally(() => {
        response.end();
      });
  }
  static getAllStudentsByMajor(request, response) {
    response.statusCode = 200
    const { major } = request.param
    readDatabase('./database').then((data) => {
        if (major === 'CS') {
            response.write(`List: ${data.CS.join(', ')}\n`)
            response.end()
        } else if (major === 'SWE') {
            response.write(`List: ${data.SWE.join(', ')}\n`)
            response.end()
        } else {
            response.statusCode = 500
            throw new Error("Major parameter must be CS or SWE")
        }
    }).catch(() => {
        response.statusCode = 500
        throw new Error("Cannot load the database")
    })
  }
}

module.exports = StudentsController;
