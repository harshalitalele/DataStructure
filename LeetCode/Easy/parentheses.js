var removeOuterParentheses = function(S) {
    var primitive = "",
        baseCollection = [],
        primCnt = 0,
        o = '(',
        c = ')';
    for(var i in S) {
        var curP = S[i];
        if(baseCollection.length == 0 || baseCollection[baseCollection.length-1] == c) {
            if(curP == o) {
                baseCollection.push(curP);
            } else {
                console.log("The string is errornous");
            }
        } else {
            if(primCnt == 0 && curP === c) {
                baseCollection.push(curP);
            } else {
                primitive += curP;
                if(curP === o) {
                    primCnt++;
                } else {
                    primCnt--;
                }
            }
        }
    }
    return primitive;
};
