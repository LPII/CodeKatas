/*

Task: Raj once wanted to code a program to make a plus sign using the numbers but he didn't have any idea to do so. Using 'n' as a parameter in the function pattern complete the code and solve the pattern so that Raj fells happy.




*/

function pattern(n) {
  var limit = n;
  var verLim = (n * 2) - 1;
  var whSp = " ";
  var repWhSp;
  var seqArr = [];
  var patArr = [];
  var out;
  var theSeq;

  function retSeq(int) {
    for (var j = 1; j <= verLim; j++) {
      if (j <= limit) {
        seqArr.push(j);
      } else {
        g = ((j - n) - n) * -1;
        seqArr.push(g);
      }
    }
  } //end retSeq

  function repWp(li) {
    var val = li;
    var ar = Array(val).join(" ");
    return ar;
  } //end repWp

  retSeq(limit);
  theSeq = seqArr.join("");
  repWhSp = repWp(limit);



  for (var i = 1; i <= verLim; i++) {
    if (i == limit) {
      patArr.push((theSeq) + "\n");
     
    } else if (i <= limit) {
      patArr.push((repWhSp + i) + "\n");

    } else {
      patArr.push((repWhSp + (((i - n) - n) * -1)) + "\n");
    }
  } //end for 
  out = patArr.join("");
  console.log(out);
}

pattern(8);
