// You are tasked with protecting an important application against hackers.
// The first defense you have to implement is brute force protection.
// Some inexperienced (or lazy) hackers may try to break in by simply guessing the admin password over and over again.
// Design a function which will block a login attempt if it comes from an IP address which failed to login 20 times in a row.
// The function will receive a single parameter - an object containing two properties:
// loginAttempt.sourceIP // the IP of the person trying to log in
// loginAttempt.successful // whether the log-in attempt succeeded
// The bruteForceDetected function should return true when the IP should be blocked and false otherwise.
// Note: A successful login should reset the number of counts.


var ipStore = [];
var limit = 19;

function bruteForceDetected(loginRequest) {

    if (loginRequest.successful === true) {
        if (ipStore.length > 1) {
            function whichOne(i) {
                return loginRequest.sourceIP === i.theIP;
            }
            var theMatchedEntry = ipStore.find(whichOne);
            theMatchedEntry.theCount = 0;
        }
        return false
    } else {
        if (ipStore.length < 1) {
            var ipEntry = {
                "theIP": loginRequest.sourceIP,
                "theCount": 1
            };
            ipStore.push(ipEntry);
            return false
        } else {
            function doesMatch(i) {
                return loginRequest.sourceIP === i.theIP;
            }

            if (ipStore.some(doesMatch) === true) {
                function whichOne(i) {
                    return loginRequest.sourceIP === i.theIP;
                }

                var theMatchedEntry = ipStore.find(whichOne);
                if (theMatchedEntry.theCount >= limit) {
                    return true;
                } else {
                    theMatchedEntry.theCount++;

                    return false;
                }
            } else {
                var ipEntry = {
                    "theIP": loginRequest.sourceIP,
                    "theCount": 1
                };
                ipStore.push(ipEntry);
                return false;
            }
        }
    }
}