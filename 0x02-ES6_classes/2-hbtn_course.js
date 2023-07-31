export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === "string" ? name : "";
    this._length = typeof length === "number" ? length : 0;
    this._students = Array.isArray(students) ? students : [];
  }

  set name(newName) {
    if (typeof newName === "string") {
      this._name = newName;
    } else {
      console.error("Name must be a string.");
    }
  }

  set length(newLength) {
    if (typeof newLength === "number") {
      this._length = newLength;
    } else {
      console.error("Length must be a number.");
    }
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      console.error('Students must be an array.');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
