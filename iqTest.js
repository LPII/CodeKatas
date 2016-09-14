/*

Task: Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
*/


function iqTest(numbers) {
  //make array of string
  var splitArray = numbers.split(" ");
  //switch var
  var isOdd = checkIfOdd();
  
  
 //check nature of array, odd or even
  function checkIfOdd() {
    // chop off first three
    var firstThree = splitArray.slice(0, 3);
    //check array vals to see if odd or even and change to 1 or 2
    for (var i = 0; i <= 3; i++) {
      var first = firstThree[0];
      var second = firstThree[1];
      var third = firstThree[2];
      if (firstThree[i] % 2 == 0) {
        firstThree[i] = 2;
      } else {
        firstThree[i] = 1;
      }
    } //end for 
    //add array values to determine nature of parent array, odd or even, by flipping switch var
    var theSum = (Number(first)) + (Number(second)) + (Number(third));
    if (theSum >= 5) {
      return false;
    } else {
      return true;
    }
  } // end checkIfOdd


  var thePos = getPos();
  
//return the position of the outlier based on row orientation
  function getPos() {
    if (isOdd == false) {
      for (var i = 0; i < splitArray.length; i++) {
        var numEntry = splitArray[i];
        if (numEntry % 2 !== 0) {
          return Number((splitArray.indexOf(numEntry)) + 1)

        }
      }

    } else if (isOdd == true) {
      for (var i = 0; i < splitArray.length; i++) {
        var numEntry = splitArray[i];
        if (numEntry % 2 == 0) {
          return Number((splitArray.indexOf(numEntry)) + 1)

        }
      }

    }
  }


return thePos;


} //end iqTest