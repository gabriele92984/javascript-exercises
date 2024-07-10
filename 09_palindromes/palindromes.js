const palindromes = function (string) {
  let original = string.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").toLowerCase();

//take original sentence and reverse
  let reverse = original.split('').reverse().join('');

//compare original vs reversed
  if (original == reverse) {
    return true;
  } else {
    return false;
  }
};
// Do not edit below this line
module.exports = palindromes;
