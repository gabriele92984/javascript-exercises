/*
const removeFromArray = function(firstArray,...toRemove) {
  let modifiedArray = [...firstArray];
  for (let i = 0; i < toRemove.length; i++) {
      if (modifiedArray.includes(toRemove[i])) {
          modifiedArray.splice(modifiedArray.indexOf(toRemove[i]), 1)
      }    
  }
  return modifiedArray;
};
*/

/* This function uses the Array.prototype.filter method to create 
a new array that only contains elements not included in the itemsToRemove array. 
The spread operator (...) is used to allow for any number of optional arguments to 
be passed to the function. */

const removeFromArray = function(arr, ...itemsToRemove) {
  return arr.filter(item => !itemsToRemove.includes(item));
};

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

// Do not edit below this line
module.exports = removeFromArray;