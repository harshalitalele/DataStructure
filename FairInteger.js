var num = 1212;

var fs = require("fs");

fs.readFile("temp.txt", function(err, buf) {
  console.log(buf.toString());
});

function fairInteger() {
    var presses = 0;
    num = num + "";
    var numLen = num.length,
        isPrevMod = false;
    for(var i = numLen-1; i >= 0; i--) {
        var digit = num[num.length-i-1],
            isOdd = digit % 2 == 1,
            nextNum = num.slice(num.length-i);
        if(nextNum.length > 0 && isOdd) {
            var numToAdd = Math.pow(10, nextNum.length) - nextNum,
                numToSub = Number(nextNum) + 1;
            if(isPrevMod) {
                presses += numToSub;
                num = Number(num) - numToSub + "";
                isPrevMod = true;
                continue;
            }
            if(numToAdd < numToSub) {
                presses += numToAdd;
                num = Number(num) + numToAdd + "";
                isPrevMod = true;
                continue;
            } else {
                presses += numToSub;
                num = Number(num) - numToSub + "";
                isPrevMod = true;
                continue;
            }
            isPrevMod = false;
        } else if(nextNum.length == 0 && isOdd) {
            presses += 1;
            isPrevMod = true;
        }
    }
    alert(presses);
    return presses;
}
