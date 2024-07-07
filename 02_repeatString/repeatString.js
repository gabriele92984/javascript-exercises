const repeatString = function(string, num) {
  
  let outString = '';
  let i = num;
  if (num < 0) return 'ERROR';
  while (i) {
    outString += string;
    i--;
  }

  return outString;

};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
