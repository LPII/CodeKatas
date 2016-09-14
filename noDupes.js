/*

Task: Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.


*/

//works but removes all duplicates when the actual question was to remove any of the same next to each value 

function inOrder(seq) {
  var theAr = formatSeq();


  function formatSeq() {
    //vars for output arrays
    var newAr;
    var strAr;
    var outAr;

    //figure out what the seq is
    var isNum = typeof seq;
    if (isNum == "string") {
      //make array of string sequence
      newAr = seq.split("");
    } else if (isNum == "object") {
      //do nothing since its already an array
      newAr = seq;
    } else {
      //create string array of number sequence then convert and store string ar to number ar
      strAr = ("" + seq).split("");
      newAr = strAr.map(Number);
    }

    function elimDupes(arr) {
      var i;
      var len = arr.length;
      var out = [];
      var obj = {};

      for (i = 0; i < len; i++) {
        obj[arr[i]] = 0;
      }
      for (i in obj) {
        out.push(i);
      }
      if (isNum !== "string") {
        out = out.map(Number);
      }
      console.log(isNum);
      return out;

    } //end elimdupes()

    outAr = elimDupes(newAr);
    return outAr;

  } //end formatSeq()

  console.log(theAr);
  return theAr;
} //end inorder

//function call
inOrder([1,2,3]);
