export default function updateStudentGradeByCity(students, city, newGrades) {
  const filterStudents = students.filter((student) => student.location === city);
  return filterStudents.map((student) => {
    const findGrade = newGrades.find((grade) => grade.studentId === student.id);
    const addGrade = findGrade ? findGrade.grade : 'N/A';
    return { ...student, addGrade };
  });
}
