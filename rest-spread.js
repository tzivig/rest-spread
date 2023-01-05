/* Write an ES2015 Version */

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);


const findMin = (...args) => Math.min(...args);


const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

function doubleAndReturnArgs(arr, ...args) {
  const doubledArgs = args.map(arg => arg * 2);
  return [...arr, ...doubledArgs];
}


// remove a random element in the items array
// and return a new array without that item
const removeRandom = items => {
  const index = Math.floor(Math.random() * items.length);
  return [...items.slice(0, index), ...items.slice(index + 1)];
};

// Return a new array with every item in array1 and array2
const extend = (array1, array2) => [...array1, ...array2];

// Return a new object with all the keys and values
// from obj and a new key/value pair
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

// Return a new object with a key removed
const removeKey = (obj, key) => {
  const { [key]: removed, ...rest } = obj;
  return rest;
};

// Combine two objects and return a new object
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

// Return a new object with a modified key and value
const update = (obj, key, val) => ({ ...obj, [key]: val });
