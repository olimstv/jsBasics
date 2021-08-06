const pt = fun => {
  console.time('test');
  for (let i = 0; i < 100000; i++) {
    fun;
  }
  console.timeEnd('test');
};

// ********************************
// Filter unique array members
// ********************************
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.
let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O'
];
const unique = arr => {
  return new Set(arr);
};
console.log(unique(values));

// ********************************
// Filter anagrams
// ********************************
// Write a function clean(arr) that returns an array cleaned from anagrams.
// with map()
let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
const cleanMap = arr => {
  let map = new Map();

  for (let word of arr) {
    // split the words into letters
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }
  return Array.from(map.values());
};
console.log(`cleanMap(arr)`, cleanMap(arr));
// with oject
const cleanObj = arr => {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split('').sort().join('');

    obj[sorted] = arr[i];
  }
  return Object.values(obj);
};
// ********************************
// Iterable keys
// ********************************
// We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
let keysMap = new Map([
  ['name', 'Oli'],
  ['username', 'olimoli'],
  ['email', 'email@someemail.com']
]);

let keys = Array.from(keysMap.keys());

console.log('keys :>> ', keys);

// console.log(`cleanObj(arr)`, cleanObj(arr));
// pt(cleanMap(arr));
const functions = {
  pt,
  unique,
  cleanObj,
  cleanMap
};
module.exports = functions;
