interface Person {
  name: String;
  age: Number;
}

interface Employee extends Person {
  employeeId: Number;
}
const employee: Employee = {
  name: "John Doe",
  age: 30,
  employeeId: 12345,
};
console.log(employee);
