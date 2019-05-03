var s = "3[a2[bc4[d]]]";

var decodeString = function() {
    var decodedStr = "",
        cnt = 0,
        repStr = '',
        i = 0;
    while(i < s.length) {
        var curCh = s[i];
        if(Number(curCh)) {
            var tempDecode = evalStr(i, s);
            i = tempDecode[0];
            decodedStr += tempDecode[1];
        } else {
            decodedStr += curCh;
            i++;
        }
    }
    console.log(decodedStr);
}

function evalStr(index, str) {
    var nextCh = str[index];
    if(nextCh == ']') {
        return [index, ''];
    } else if(Number(nextCh)) {
        var tempAns = evalStr(index+2, str),
            str = "";
        for(var i = 0; i < Number(nextCh); i++) {
            str += tempAns[1];
        }
        return [tempAns[0]+1, str];
    }
    var evaluation = evalStr(index+1, str);
    return [evaluation[0], nextCh + evaluation[1]];
}
