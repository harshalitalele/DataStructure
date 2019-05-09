var formula = "Hs2(On4S)3";
//K4(ON(SO3)2)2

var countOfAtoms = function() {
    var ans = getCntObj(formula, 0);
    console.log(ans);
};

function getCntObj(formula, index) {
    var curEl = '',
        obj = {},
        i = index,
        elArr = [];
    while(i < formula.length) {
        var curCh = formula[i],
            isCapVal = isCapChar(curCh);
        if(isCapVal === 1) {
            if(curEl) {
                obj[curEl] = 1;
            }
            curEl = curCh;
        } else if(isCapVal === -1) {
            curEl += curCh;
        } else if(!isNaN(Number(curCh))) {
            // start collecting count
            if(!curEl) {
                multiplier(obj, elArr, Number(curCh));
                elArr = [];
            } else {
                if(!obj[curEl]) {
                    obj[curEl] = 1;
                }
                obj[curEl] = Number(curCh) * obj[curEl];
                curEl = '';
            }            
        } else if(curCh === '(') {
            elArr = [];
            var op = getCntObj(formula, i+1);
            elArr = Object.keys(op[0]);
            mergeObj(obj, op[0]);
            i = op[1];
        } else if(curCh === ')') {
            if(curEl) {
                obj[curEl] = 1;
            }
            return [obj, i];
        }
        i++;
    }
    if(curEl) {
        obj[curEl] = 1;
    }
    return obj;
}

function mergeObj(obj1, obj2) {
    for(var k in obj2) {
        if(obj1[k]) {
            obj1[k] = obj1[k] + obj2[k];
        } else {
            obj1[k] = obj2[k];
        }
    }
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
