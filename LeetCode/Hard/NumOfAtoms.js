var formula = "K4(ON(SO3)2)2";

var countOfAtoms = function() {
    
};

function getCntObj(formula, index) {
    var curEl = '',
        obj = {};
    for(var i = index; i < formula.length; i++) {
        var curCh = formula[i],
            isCapVal = isCapChar(curCh);
        if(isCapVal === 1) {
            obj[curEl] = 1;
            curEl = curCh;
        } else if(isCapVal === -1) {
            curEl += curCh;
        } else if(!isNaN(Number(curCh))) {
            // start collecting count
            /*if(!obj[curEl]) {
                obj[curEl] = 1;
            }
            obj[curEl] = Number(curCh) * obj[curEl];*/
        } else if(curCh === '(') {
            getCntObj(formula, index);
        } else if(curCh === ')') {
            //
        }
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

function isCapChar(char) {
    var chCode = char.charCodeAt();
    if(chCode >= 97 && chCode <= 122) {
        return -1;
    } else if(chCode >= 65 && chCode <= 90) {
        return 1;
    }
    return 0;
}
