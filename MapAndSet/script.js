// *******************************
//  Map
// *******************************
// Map is a collection of keyed values
//  Methods and properties:
//  * Create map ==> new Map([iterable])
let map = new Map();

// * Store the value ==> map.set(val)
// can use chaining
map
  .set('name', 'Glenna Reichert') // stores the value by the key
  .set('username', 'Delphine')
  .set('email', 'Chaim_McDermott@dana.io');

// * Get the value ==> map.get(val)
console.log(map.get('name'));
//  returns the value by the key

// * Check if the value is in the map ==> map.has(val)
//   return true/false
console.log(map.has('names'));

// * Remove the value ==> map.delete(val)
//   return true/false wether the key existed at the moment of deletion
console.log(map.delete('name'));

// * Remove everything ==> map.clear()
// * Check the size ==> map.size
// returns the current element count
// Object vs Map:
// - Any keys, objects cna be kays;
// - Additional convenient methods, the size property

// -------------------------------
// Iteration over Map
// -------------------------------
// 3 methods:
// - map.keys() ==> returns an iterable for keys
// - map.values() ==> return an iterable for values
// - map.entries() ==> returns an iterable for entries [key, val], its used by default in for..of.

// !!! The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.

// Map has a built-in forEach method similar to Array
map.forEach((val, key, map) => console.log(` --- ${key}: ${val}`));

// Object.entries(obj) ==> Map from Object
let obj = {
  name: 'John',
  age: 30
};
let mapFromObj = new Map(Object.entries(obj));
console.log('mapFromObj:', mapFromObj);
// Object.fromEntries() ==> Object from Map
let mapObj = Object.fromEntries(map);
console.log(`mapObj`, mapObj);

// *******************************
// Set
// *******************************
// Set is a special type of collection, set of values w/o keys and
// - each val. can occure only once
// -----------------------------------------------------------------
// Main methods:
// Create Set ==> new Set(iterable)
let set = new Set(['John', 'Ben', 'Sara']);
console.log(`set`, set);

// Add value to the set ==> set.add(val)
set.add('Oliver'); // adds the value, returns the set itself
console.log(`set`, set);

// Remove value from the set ==> set.delete(val)
set.delete('Sara'); // removes the value
console.log(set);

// Check if the value exists in the set ==> set.has(val)
console.log(set.has('Sara')); // return true/false

// Remove everything from the set ==> set.clear()
let setCopy = new Set(set);
setCopy.clear();
console.log(setCopy);

// set.size ==> is the element count
console.log(set.size);
console.log(setCopy.size);
