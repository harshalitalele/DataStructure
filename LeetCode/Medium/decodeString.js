var s = "10[a2[d]]";

var decodeString = function() {
    var decodedStr = "",
        cnt = 0,
        repStr = '',
        i = 0;
    while(i < s.length) {
        var curCh = s[i];
        if(Number(curCh)) {
            var tempDecode = evalStr(i, s, "");
            i = tempDecode[0];
            decodedStr += tempDecode[1];
        } else {
            decodedStr += curCh;
            i++;
        }
    }
    console.log(decodedStr);
}

function evalStr(index, str, prevStr, cnt) {
    var nextCh = str[index];
    
    if(nextCh == undefined) {
        return prevStr;
    } else if(!isNaN(Number(nextCh))) {
        if(Number(prevStr)) {
            prevStr += nextCh;
        } else {
            prevStr = nextCh;
        }
        return evalStr(index+1, str, prevStr);
    } else if(nextCh == '[') {
        return evalStr(index+1, str, "", Number(prevStr));
    } else if(nextCh == ']') {
        var tempAns = "";
        for(var i = 0; i < cnt; i++) {
            tempAns += prevStr;
        }
        return evalStr(index+1, str, tempAns);
    } else {
        prevStr += nextCh;
        return evalStr(index+1, str, prevStr, cnt);
    }
    
    return prevStr;
}

var sub = "2[a2[d]]";

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
            return [subStr + ans, repStr[1]];
        } else if(curCh === ']') {
            return [subStr, index];
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
}

function mulStr(str, m) {
    var ans = "";
    for(var i = 0; i < m; i++) {
        ans += str;
    }
    return ans;
}

console.log(decodeSubStr("[a12[b]]", 0, 10));
