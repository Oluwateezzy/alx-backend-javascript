const fs = require('fs')

function readDatabase(path){
    return new Promise(async (resolve, reject) => {
        let data
        try {
            data = await fs.promises.readFile(path, 'utf-8')
        } catch (error) {
            reject(new Error("Database not found"))
        }
        console.log(data)
        const students = data.split('\n')
        const firstNames = []
        for (const student of students.slice(1)){
            firstNames.push(student.split(',')[0])
        }
        console.log(firstNames)
        return {data: firstNames}
    })
}

module.exports = readDatabase