export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        // All departments have been iterated through
        return { done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];
      const employeesInDepartment = report.allEmployees[currentDepartment];

      if (currentEmployeeIndex >= employeesInDepartment.length) {
        // Move to the next department
        currentDepartmentIndex += 1;
        currentEmployeeIndex = 0;
        return this.next(); // Recursively call next to move to the next valid department
      }

      const currentEmployee = employeesInDepartment[currentEmployeeIndex];
      currentEmployeeIndex += 1;

      return { value: currentEmployee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
