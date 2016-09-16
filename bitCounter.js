/*

Task: Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.


*/

var countBits = function(n) {
  var bin, binArr, x = 0;
  bin = (n >>> 0).toString(2);
  binArr = bin.split("");
  for (i = 0; i < binArr.length; i++) {
    if (binArr[i] == "1") {
      x++;
    }
  }
return x;
};