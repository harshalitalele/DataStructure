function lengthOfLongestSubstring() {
    var startIn = 0,
        allLens = [];
    
    for(var cin in s) {
        var c = s[cin],
            lastIn = checkDup(s, startIn, cin, c);
        if(lastIn != cin) {
            var lastStrLen = cin - startIn;
            allLens.push(lastStrLen);
            startIn = cin;
        }
    }
    console.log(Math.max.apply(null, allLens));
}

function checkDup(s, st, en, c) {
    for(var i = st; i <= en; i++) {
        if(s[i] === c) {
            return i;
        }
    }
    return false;
}

var s = "acddcbaa";