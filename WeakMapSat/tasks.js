// *******************************
// Store "unread" flags
// *******************************
let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' }
];

let readMessages = new WeakSet();

const countUnreadMessages = arr => arr.map(msg => readMessages.add(msg));

// countUnreadMessages(messages);
// console.log('unread :>> ', readMessages.has(messages[0]));
// console.log('unread :>> ', readMessages.has(messages[2]));
// messages.pop();
// console.log('unread :>> ', readMessages.has(messages[0]));
// console.log('unread :>> ', readMessages.has(messages[2]));

// *******************************
// Store read dates
// *******************************
// In the previous task we only needed to store the “yes/no” fact. Now we need to store the date, and it should only remain in memory until the message is garbage collected.
let readDates = new WeakMap();
const start = new Date(2020, 07, 01).getTime();
console.log('start:', start);
const end = Date.now();
console.log('end:', end);
const storeReadDates = (arr, startDate, endDate) => {
  arr.map(msg => {
    let randomUnixTimestamp = Math.floor(
      Math.random() * (endDate - startDate) + endDate
    );
    readDates.set(msg, new Date(randomUnixTimestamp));
  });
};
storeReadDates(messages, start, end);
console.log(readDates.has(messages[0]));
messages[0] = null;
console.log(readDates.has(messages[0]));

const weakMapSet = {
  storeReadDates,
  countUnreadMessages
};
// export
module.exports = weakMapSet;
