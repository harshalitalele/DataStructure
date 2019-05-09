var formula = "K4(ON(SO3)2)2";

var countOfAtoms = function() {
    
};

function getCntObj(formula, index) {
    for(var i = index; i < formula.length; i++) {
        //
    }
    return obj;
}

function multiplier(obj, elArr, cnt) {
    for(var i in elArr) {
        var el = elArr[i];
        var prevCnt = obj[el];
        obj[el] = prevCnt * cnt;
    }
}
