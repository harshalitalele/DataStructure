var s = "3[a]2[bc]";

var decodeString = function() {
    var decodedStr = "";
    console.log(decodeSubStr(s, 0));
    return decodeSubStr(s, 0);
}

function decodeSubStr(str, index, mul) {
    var subStr = "";
    if(!mul) {
        mul = "";
    }
    for(var i = index; i < str.length; i++) {
        var curCh = str[i];
        if(curCh === '[') {
            var repStr = decodeSubStr(str, i+1),
                ans = mulStr(repStr[0], mul);
            mul = "";
            subStr = subStr + ans;
            i = repStr[1];
        } else if(curCh === ']') {
            return [subStr, i];
        } else if(!isNaN(Number(curCh))) {
            if(mul === undefined) {
                mul = curCh;
            } else {
                mul += curCh;
            }
        } else {
            subStr += curCh;
        }
    }
    return subStr;
}

function mulStr(str, m) {
    var ans = "";
    for(var i = 0; i < m; i++) {
        ans += str;
    }
    return ans;
}
