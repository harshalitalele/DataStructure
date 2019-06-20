function longestPalindrome() {
    var longestPali = null;
    
    for(var cin in s) {
        cin = parseInt(cin);
        var c = s[cin],
            lastChar = s[cin - 1],
            nextChar = s[cin + 1],
            pali = null;
        
        if(c === lastChar) {
            pali = getPalLen(s, cin - 1, cin);
            if(!longestPali || longestPali.length < pali.length) {
                longestPali = pali;
            }
        }
        if(lastChar === nextChar && lastChar != undefined && nextChar != undefined) {
            pali = getPalLen(s, cin - 1, cin + 1);
            if(!longestPali || longestPali.length < pali.length) {
                longestPali = pali;
            }
        }
    }
    
    console.log(longestPali);
}

function getPalLen(s, fIn, lIn) {
    var palLen = lIn - fIn + 1;
    fIn--;
    lIn++;
    while(fIn >= 0 && lIn < s.length) {
        if(s[fIn] != s[lIn]) {
            return s.slice(fIn+1, lIn);
        } else {
            fIn--;
            lIn++;
            palLen += 2;
        }
    }
    return s.slice(fIn+1, lIn);
}

var s = "twinkleelkniwttwinkleelkniwttwinkleelkniwabcdttwinkleelkniwttwinkleelkniwttwinkleelkniwt";
