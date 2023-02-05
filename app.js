const filterOutOdds = (num) => {
  let nums = [...num];
  return nums.filter((num) => num % 2 === 0);
};

filterOutOdds([2, 3, 4, 5, 6]);
//////////////////////////
const findMin = (...nums) => Math.min(...nums);

findMin(1, 4, 12, -3);
//////////////////////////
const mergeObjects = (a, b) => ({ ...a, ...b });

mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
//////////////////////////
const doubleAndReturnArgs = (arr, a, b) => {
  let arr1 = [a * 2, b * 2];
  return [...arr, ...arr1];
};

doubleAndReturnArgs([2], 10, 4);
///////////////////////////
const removeRandom = (items) => {
  const random = Math.floor(Math.random() * items.length);
  const removed = items[random];
  return items.filter((value) => value !== removed);
};
removeRandom(["Leonaro", "Rafaelo", "Michaelangelo", "Donatello"]);

///////////////////////////

const extend = (array1, array2) => [...array1, ...array2];
extend([1, 2], [3, 4]);

//////////////////////////////

const addKeyVal = (obj, key, value) => {
  obj[key] = value;
  return { ...obj };
};

addKeyVal({ name: "shahab", age: 35 }, "job", "software engineer");
/////////////////////////////
const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

removeKey({ name: "Shahab", age: 35, job: "sofware engineer" }, "age");
////////////////////////////
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

combine(
  { ninja: "Rafael", mastery: "red ninja" },
  { name: "Donatello", rank: "purple ninja" }
);
////////////////////////////
const update = (obj, key, val) => {
  obj[key] = val;
  return { ...obj };
};

update({ name: "Rafael", rank: "black ninja" }, "rank", "Splinter's son");
