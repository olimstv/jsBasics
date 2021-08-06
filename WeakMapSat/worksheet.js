// ********************************
// WeakMap
// ********************************
// Map vs WeakMap:
// 1) keys in WeakMap must be objects (not primitives)
let john = { name: 'John' };

let weakMap = new WeakMap();
weakMap.set(john, 'some data');
console.log('john :>> ', john);
console.log('WeakMap :>> ', weakMap);
console.log('WeakMap :>> ', weakMap.get(john));
// if there are no references to this object, it'll be removed from the memory (by the GC)
// john = null;
console.log('WeakMap :>> ', weakMap.get(john));

// WeakMap does not support iteration and methods keys(), values(), entries()
// because it's not known when exactly GC does the clean up. For that reason methods that access all keys/values are not supported.

// WeakMap has only the following methods:
// -- weakMap.get(key)
// -- weakMap.set(key, value)
// -- weakMap.delete(key)
// -- weakMap.has(key)
// --------------------------------
// Use case: additional data
// --------------------------------
// useful, when working with an object which belongs to another code (3rd party lib etc)

// let loginCount = new Map();
let loginCount = new WeakMap();
loginCount.set(john, 1);

// increase the login loginCount
function countUser(user) {
  let count = loginCount.get(user) || 0;
  loginCount.set(user, count + 1);
}
countUser(john);
console.log('loginCount :>> ', loginCount.get(john));
// console.log('loginCount :>> ', Array.from(loginCount.keys()));
john = null;
// console.log('loginCount :>> ', Array.from(loginCount.keys()));
console.log('loginCount :>> ', loginCount.get(john));

// ------------------------------------
// Use case: caching
// ------------------------------------
// we can store ("cache") results from a function, so that future calls on the same function can reuse it
// if we use Map for that, map size after deletion of the object will stay (taking memory)
// let cache = new Map(); // Map version
let cache = new WeakMap(); // WeakMap version
let user1 = {
  name: 'John',
  dob: new Date(1999, 07, 22)
};
let user2 = {
  name: 'Jane',
  dob: new Date(2003, 09, 12)
};

// calculate and remember the results
function getAge(obj) {
  let diff = Date.now() - obj.dob.getTime();
  let ageDif = new Date(diff);
  // cache.set(obj.name, Math.abs(ageDif.getUTCFullYear() - 1970)); // Map version
  cache.set(obj, Math.abs(ageDif.getUTCFullYear() - 1970)); // WeakMap version
}
getAge(user1);
console.log('cache :>> ', cache);
console.log('cache :>> ', cache.get(user1)); // WeakMap version
getAge(user2);
console.log('cache before deletion :>> ', cache);
console.log('cache before deletion :>> ', cache.get(user2)); // WeakMap version

user1 = null;
console.log('cache after deletion :>> ', cache);
console.log('cache after deletion :>> ', cache.get(user1)); // WeakMap version

// *******************************
// WeakSet
// *******************************
// - It is analogous to Set, but we may only add objects to WeakSet (not primitives)
// - An object exists in the set while it is reachable from somewhere else
// - Like Set, it supports add, has and delete, but not size, keys() and no iterations.
// Serves as additional storage for the objects, but not for arbitrary data, rather for yes/no facts.
// Limitation of WeakMap and WeakSet ==> absence of iterations and inability to get all current content
// Main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.

// WeakMap and WeakSet are used as "secondary" data structures in addition to the "primary" object storage
