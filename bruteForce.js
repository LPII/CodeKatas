// You are tasked with protecting an important application against hackers.
// The first defense you have to implement is brute force protection.
// Some inexperienced (or lazy) hackers may try to break in by simply guessing the admin password over and over again.
// Design a function which will block a login attempt if it comes from an IP address which failed to login 20 times in a row.
// The function will receive a single parameter - an object containing two properties:
// loginAttempt.sourceIP // the IP of the person trying to log in
// loginAttempt.successful // whether the log-in attempt succeeded
// The bruteForceDetected function should return true when the IP should be blocked and false otherwise.
// Note: A successful login should reset the number of counts.


//Switch to see if the IP is a repeat
var isRepeated = false;
//A counter to keep track of tries
var counter = 0;
//A place to store the previous IP to compare against
var ipStore = 0;


function bruteForceDetected(loginRequest) {
    var prevIP = ipStore;
    console.log("prevIP-->",prevIP);
    console.log(loginRequest);

    //If the attempt failed..
    if ((loginRequest.successful === false) && (counter <= 17)){
        //..get the previous IP


        //Check request IP against the previous IP,
        // if the same...
        if (loginRequest.sourceIP === prevIP) {
            //Set repeat switch to true
            isRepeated = true;
            //increment counter
            counter++;
            //Display counter
            console.log("Repeat IP detected, failed attempt count:", counter);
            //Update previous IP storage
            ipStore = loginRequest.sourceIP;
            return false
        } else {
            //If different
            console.log("New IP Detected");
            counter = 0;
            ipStore = loginRequest.sourceIP;
            return false
        }
    } else if(loginRequest.successful === true) {
        console.log("IP login success");
        counter = 0;
        ipStore = loginRequest.sourceIP;
        return false
    }else{
        console.log("prevIP-->",prevIP);
        console.log("BRUTE FORCE DETECTED");
        counter = 0;
        ipStore = loginRequest.sourceIP;
        return true
    }
}





//this passes almost everything but I need to add a object that keeps track of IPS and how many attempts per then determines if that IP is bad instead of looking at previous