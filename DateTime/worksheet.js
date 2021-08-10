// *******************************
// Date() object
// *******************************
// Creation ==> new Date();
// w/o arguments creates a Date object for the current date and time
let date = new Date();
// console.log('date:', date);

// new Date(milliseconds) ==> amount of milliseconds passed since 1 Jan 1970 UTC+0
date = new Date(72 * 3600 * 1000); // hours * seconds * milliseconds
// console.log('date:', date);
// date.getTime() ==> converts the existing date obj to a timestamp
// console.log(`timestamp from a date: `, date.getTime());

// new Date(datestring) ==> the same algo as Date.parse uses
date = new Date('1985-12-09');
// console.log('date:', date);

// Methods to access the Date components:
// - getFullYear() ==> get the year (4 digits)
// console.log('Year', date.getFullYear());
// - getMonth() ==> get the month (from 0 to 11)
// console.log('Month', date.getMonth());
// - getDate() ==> get the day of month (from 1 ot 31)
// console.log('Day', date.getDate());
// - getHours(), getMinutes(), getSeconds(), getMilliseconds()
// console.log('Hours', date.getHours());
// console.log('Seconds', date.getSeconds());
// console.log('Milliseconds', date.getMilliseconds());

// getDay() ==> (0 - 6: 0 (Sunday), (1) Monday etc.
// console.log('day:>> ', date.getDay());

// All the methods above return the components relative to the local time zone.
// To get UTC-counterparts use 'UTC' after 'get' (getUTCMonth(), getUTCFullYear() etc.)
// console.log(date.getUTCDate());
// Methods w/o UTC-option:
// getTime() ==> returns timestamp (milliseconds passed after 1 Jan 1970)
// getTimezoneOffset() ==> returns the difference between UTC and local time zone in minutes
// console.log(date.getTimezoneOffset());

// *********************************
// Setting date components
// *********************************
// - setFullYear(year, [month], [date])
// - setMonth(month, [date])
// - setDate(date)
// - setHours(hour, [min], [sec], [ms])
// - setMinutes(min, [sec], [ms])
// - setSeconds(sec, [ms])
// - setMilliseconds(ms)
// - setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
date.setHours(18);
date.setMinutes(40);

// console.log('date:', date);
// Every one of them except setTime() has a UTC-variant, for instance: setUTCHours().
date.setUTCHours(18);
date.setUTCMinutes(40);

// console.log('date:', date);

// console.log('date: ', date.getTimezoneOffset() / 60 + 2);

// ---------------------------------
const pt = fn => {
  let start = performance.now();
  for (let i = 0; i < 100000; i++) {
    fn;
  }
  let end = performance.now();
  console.log(`100k runs took: ${end - start} ms`);
};

// let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
// const cleanMap = arr => {
//   let map = new Map();
//   for (let word of arr) {
//     // split the words into letters
//     let sorted = word.toLowerCase().split('').sort().join('');
//     map.set(sorted, word);
//   }
//   return Array.from(map.values());
// };
// pt(cleanMap(arr));

// ****************************
let daysOfTheWeek = new Map([
  [0, 'Sunday'],
  [1, 'Monday'],
  [2, 'Tuesday'],
  [3, 'Wednesday'],
  [4, 'Thursday'],
  [5, 'Friday'],
  [6, 'Saturday']
]);
// *********************************
// EU weekday
// *********************************
// European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.
let euDate = new Date(2012, 0, 8);
// console.log('euDate:', euDate);
const getLocalDate = date => {
  return date.getDay() == 0 ? 7 : date.getDay();
};
// console.log(getLocalDate(euDate));

// *********************************
// Which day of month was many days ago?
// *********************************

let countFromDate = new Date(2015, 0, 2);
// const getDateAgo = (date, numDaysAgo) => {
//   let dayAgo = (date - (24*3600*1000)*numDaysAgo)
//   return new Date(dayAgo);
// };

function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}
// console.log(getDateAgo(countFromDate, 1));
// console.log(getDateAgo(countFromDate, 2));
// console.log(getDateAgo(countFromDate, 365));
// console.log(getDateAgo(countFromDate, 100));

// ***************************
// Last day of month?
// ***************************
// Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.
// Parameters:
// year – four-digits year, for instance 2012.
// month – month, from 0 to 11.
// For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb)
const getLastDayOfMonth = (year, month) => {
  let curMthTimestamp = new Date(year, month).getTime();
  let nextMthTimestamp = new Date(year, month + 1).getTime();
  let diff = (nextMthTimestamp - curMthTimestamp) / (24 * 3600 * 1000);
  return diff;
};
// console.log(getLastDayOfMonth(2028, 1))

// ***************************
// How many seconds have passed today?
// ***************************
// Write a function getSecondsToday() that returns the number of seconds from the beginning of today.
const getSecondsToday = () => {
  let now = new Date().getTime();
  let today = new Date(now).setHours(0, 0, 0, 0);
  return Math.round((now - today) / 1000);
};

const getSecondsToday2 = () => {
  let now = new Date();

  // create an object using the current day/month/year
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // ms difference
  return Math.round(diff / 1000); // make seconds
};

// pt(getSecondsToday2());
// console.log(getSecondsToday());
// console.log(getSecondsToday2());

// ***************************
// How many seconds till tomorrow?
// ***************************
const getSecondsTillTomorrow = () => {
  let today = Date.now();
  let tomorrow = new Date(today).setHours(0, 0, 0, 0) + 24 * 3600 * 1000;

  return Math.round((tomorrow - today) / 1000);
};
// console.log(getSecondsTillTomorrow());

// ***************************
// Format the relative date
// ***************************
const formatDate = date => {
  let now = new Date();
  let compareWith = new Date(date);
  let day =
      now.getDate().toString().length == 1
        ? '0' + now.getDate().toString()
        : now.getDate().toString(),
    month =
      now.getMonth().toString().length == 1
        ? '0' + now.getMonth().toString()
        : now.getMonth().toString(),
    year = now.getFullYear().toString().substr(2, 2),
    hours =
      now.getHours().toString().length == 1
        ? '0' + now.getHours().toString()
        : now.getHours().toString(),
    minutes = now.getMinutes();

  // console.log('minutes:', year)
  // console.log('month:', hours);
  // console.log('day:', day);

  switch (compareWith.getTime()) {
    case now - 1:
      return 'right now';

    case now - 30 * 1000:
      return '30 sec. ago';

    case now - 5 * 60 * 1000:
      return '5 min. ago';

    default:
      return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
};
console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

let test = new Date(2021, 03, 05).toISOString();

console.log(test.substr(0, 16).replace('T', ' '));
// console.log(new Date(new Date() - 5 * 60 * 1000));
