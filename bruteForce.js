function bruteForceDetected(loginRequest)
{
var loginAttempt = {};
loginAttempt.sourceIP = loginRequest.sourceIP;
loginAttempt.successful = loginRequest.successful;

if(var theAr == "undefined"){
var theAr = [];
}else{
var theIP = loginAttempt.sourceIP; 

}
}

ok this cant be done without storage, so check to see if array var is created, if not then create and empty array,
if it already exist then store the ip, and a loss counter in and object and push that object to an array 

when the function runs,
check to see if array of objects exist
if doesnt exist then create empty array
if it does exist then check the ip against the array of objects
if it doesnt show up then create new object of array and loss count at 0 
if it shows up then check its loss count
if its loss count is below 20 add to its loss count
if loss count is equal to or more than 20 then block (returning false)
