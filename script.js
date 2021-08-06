// const objects = require('./Objects/');

// let user = {
//   id: 1,
//   name: 'Leanne Graham',
//   username: 'Bret',
//   email: 'Sincere@april.biz',
//   address: {
//     street: 'Kulas Light',
//     suite: 'Apt. 556',
//     city: 'Gwenborough',
//     zipcode: '92998-3874',
//     geo: { lat: '-37.3159', lng: '81.1496' }
//   },
//   phone: '1-770-736-8031 x56442',
//   website: 'hildegard.org',
//   company: {
//     name: 'Romaguera-Crona',
//     catchPhrase: 'Multi-layered client-server neural-net',
//     bs: 'harness real-time e-markets'
//   }
// };

let options = {
  title: 'My menu',
  items: ['Item1', 'Item2']
};

function showMenu({ width = 200, height = 200, title, items } = {}) {
  console.log(`${title} ${width} ${height}`);
  console.log(items);
}
// showMenu(options);

// *******************************
// Destructuring assignment
// *******************************
let user = {
  name: 'John',
  years: 30
};
// Write the destructuring assignment that reads:
// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)
// let { name, years: age, isAdmin = false } = user;
// console.log('isAdmin:', isAdmin);
// console.log('age:', age);
// console.log('name:', name);
// *******************************
// The maximal salary
// *******************************
const pt = fn => {
  console.time('test');
  fn;
  console.timeEnd('test');
};

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};
let noSal = {};
// Create the function topSalary(salaries) that returns the name of the top-paid person.
// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.
const topSalary = salaries => {
  let topName = null,
    topSalary = 0;

  for (let [name, sal] of Object.entries(salaries)) {
    if (topSalary < sal) {
      topSalary = sal;
      topName = name;
    }
  }
  return topName;
};

// console.log(topSalary(salaries));
console.log(topSalary(noSal));

pt(topSalary(noSal));
