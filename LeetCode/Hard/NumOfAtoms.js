var formula = "Hs2L(On4S(GOn)2)3";
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
                multiplier(elArr, Number(curCh));
                mergeObj(obj, elArr);
                elArr = [];
            } else {
                if(!obj[curEl]) {
                    obj[curEl] = 1;
                }
                obj[curEl] = Number(curCh) * obj[curEl];
                curEl = '';
            }            
        } else if(curCh === '(') {
            if(curEl) {
                obj[curEl] = 1;
            }
            curEl = '';
            elArr = [];
            var op = getCntObj(formula, i+1);
            elArr = op[0];
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

function multiplier(obj, cnt) {
    for(var i in obj) {
        obj[i] = obj[i] * cnt;
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
