//99 bottles method for shits and gigs

function singSong(botNum) {
    var botCount = botNum;
    for (var i = 0; i < botNum; i++) {
        console.log(botCount + " bottles of beer on the wall");
        console.log(botCount + " bottles of beer ");
        console.log("take one down, pass it around");
        botCount--;
        console.log("..." + botCount + " bottles of beer on the wall");
    }
}

singSong(99);