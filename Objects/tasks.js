// *******************************
// Sum the properties
// *******************************
// There is a salaries object with arbitrary number of salaries.
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};
let noSal = {};
// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
// If salaries is empty, then the result must be 0.

const sumSalaries = sal => {
  let salaryValues = Object.values(sal);
  let sum = 0;
  if (salaryValues.length !== 0) {
    sum = salaryValues.reduce((sum, salaryVal) => sum + salaryVal);
  }
  return sum;
};

console.log(sumSalaries(salaries));
console.log(sumSalaries(noSal));
// *******************************
// Count properties
// *******************************
// Write a function count(obj) that returns the number of properties in the object:
let user = {
  name: 'John',
  age: 30
};

const count = obj => {
  return Object.keys(obj).length;
};
console.log(count(user));
