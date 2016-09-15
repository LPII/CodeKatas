/*

Task: Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.


*/

//this version passes all test and worked for submission 
var uniqueInOrder = function(seq) {
console.log(seq);


  var theAr;
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
 
     var insAr = arr, i, outAr, now, next, filtered;
     //compare current index to next index and alter current if theres a match
     for (i = 0; i < insAr.length - 1; i++) {
       now = insAr[i];
       next = insAr[i + 1];
       if (now === next) {
         insAr[i] = "dupe";
       }
     }
     //run through arr and spit out all non-dupe values to a new array
      filtered = insAr.filter(function(insAr) {
       return (insAr !== "dupe");
     });
     return filtered;
   } //end elimdupes()

    outAr = elimDupes(newAr);
    return outAr;

  } //end formatSeq()

  theAr = formatSeq();
  console.log(theAr);
  return theAr;
} //end uniqueInOrder
