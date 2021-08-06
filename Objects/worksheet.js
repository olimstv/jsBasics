const { users } = require('../data/data');
const data = require('../data/data');
// *******************************
// Objec.keys, values, entries
// *******************************
// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

// Map vs Object:
// Map ==> iterable
// Object ==> "real" Array
// --- call syntax ---
// Map: map.keys()
// Object.keys(obj)

// -------------------------------
// !!!  Object.keys/values/entries ignore symbolic properties
// -------------------------------
// If we need Symbolic keys:
// Object.getOwnPropertySymbols ==> returns an array of only symbolic keys
// Reflect.ownKeys(obj) ==> returns all keys.

// *******************************
// Transforming objects
// *******************************
// Objects don't have an iterator, therefore we cannot many methods (filter(), map() etc)

// To be able to transform objects follow next steps:
// 1) Get an array of key/value pairs ==> Object.entries(obj)
// 2) Use array methods to transform whatever you need to
// 3) Turn back the resulting array to an Object ==> Object.fromEntries(array)

// Practice:
// change "name" prop to "fullName" for all the user objects
// 1) Get an array of key/value pairs ==> Object.entries(obj)
let user = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org'
};
console.log('user :>> ', user);
let userDataArr = Object.entries(user);

// 2) Use array methods to transform "name" prop to "fullName" for all the users
userDataArr.forEach(el => {
  el.map((item, idx) => {
    return item === 'name' ? el.splice(el[idx], 1, 'fullName') : item;
  });
});

// 3) Turn back the resulting array to an Object ==> Object.fromEntries(array)
user = Object.fromEntries(userDataArr);
console.log('user transformed:', user);
