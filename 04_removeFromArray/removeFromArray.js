/*const removeFromArray = function() {
};*/

const removeFromArray = function(firstArray,...toRemove) {
  let modifiedArray = [...firstArray];
  for (let i = 0; i < toRemove.length; i++) {
      if (modifiedArray.includes(toRemove[i])) {
          modifiedArray.splice(modifiedArray.indexOf(toRemove[i]), 1)
      }    
  }
  return modifiedArray;
};

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

// Do not edit below this line
module.exports = removeFromArray;