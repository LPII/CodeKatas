/*

The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

alternative text

Can you translate this drawing into an algorithm?

You will be given two dimensions

a positive integer length (parameter named lng)
a positive integer width (parameter named wdth)
You will return an array with the size of each of the squares.

*/
function sqInRect(lng, wdth) {
  var theLng = lng,
    theWidth = wdth,
    theUnits, theSq, theAr = [];
//establish number of units
  theUnits = theLng * theWidth;
//validate that dimensions are not equal 
  if (theLng === theWidth) {
    return null
  } else {
    while (theUnits > 0) {
      if (theUnits <= 0) {
        return false;
        break;
      } else {
        if (theLng > theWidth) {
          theSq = theWidth * theWidth;
          theLng = theLng - theWidth;
        } else if (theLng < theWidth) {
          theSq = theLng * theLng;
          theWidth = theWidth - theLng;
        }
        theUnits = theUnits - theSq;
        theAr.push(Math.sqrt(theSq));
      }
    }
    return theAr;
  }
}