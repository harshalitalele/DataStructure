var formula = "(((Hs11B41Rf46)20(At48Te45)32(Cs15Mt19OgHs34Ts5La33Ga23Np50Dy33O24)4)13((Po21ZnPdK27Pm16TlCo34Nd30Y4N)16(Nh2BaNa28Ga15LuAl38)17(Rb23ReRf2Rf33I32Te48Bh)50(Cf37Ne32W33BeRgIr21Cs34Mc17Zn43)43(Ho23ArEs38Er40Tb8DyIn41Tc36Hg21Cl9)42(Y8B25Ts16S10Fr2Lv22Po6)2(Zn46N34Ds7Sg20HoRf31P25ZrIHo22)40(FeRh50Kr9ThPt49)37(TaLrKr35Kr12SrCd26Xe28Mt26CnFl)43)23)17";
//((HHe28Be26He)9)34

var countOfAtoms = function() {
    var ans = getCntObj(formula, 0);
    console.log(getFormattedAns(ans));
};

function getFormattedAns(obj) {
    var elems = Object.keys(obj),
        sortedAns = "";
    elems.sort();
    for(var e in elems) {
        var el = elems[e];
        var cnt = obj[el] > 1 ? obj[el] : '';
        sortedAns += el + cnt;
    }
    return sortedAns;
}

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
                if(!obj[curEl]) {
                    obj[curEl] = 0;
                }
                obj[curEl] += 1;
            }
            curEl = curCh;
        } else if(isCapVal === -1) {
            curEl += curCh;
        } else if(!isNaN(Number(curCh))) {
            // start collecting count
            // get next numbers and update index
            var numOp = getWholeNum(formula, i);
            i = numOp[1];
            if(!curEl) {
                multiplier(elArr, Number(numOp[0]));
                mergeObj(obj, elArr);
                elArr = [];
            } else {
                if(!obj[curEl]) {
                    obj[curEl] = 0;
                }
                obj[curEl] = Number(numOp[0]) + obj[curEl];
                curEl = '';
            }            
        } else if(curCh === '(') {
            if(curEl) {
                obj[curEl] = 1;
            }
            curEl = '';
            elArr = {};
            var op = getCntObj(formula, i+1);
            elArr = op[0];
            i = op[1];
        } else if(curCh === ')') {
            if(curEl) {
                if(!obj[curEl]) {
                    obj[curEl] = 0;
                }
                obj[curEl] += 1;
            }
            return [obj, i];
        }
        i++;
    }
    if(curEl) {
        if(!obj[curEl]) {
            obj[curEl] = 0;
        }
        obj[curEl] += 1;
    }
    if(elArr != {}) {
        mergeObj(obj, elArr);
    }
    return obj;
}

function getWholeNum(str, index) {
    var num = '';
    for(var i = index; i < str.length; i++) {
        var curCh = str[i];
        if(!isNaN(Number(curCh))) {
            num += curCh;
        } else {
            break;
        }
    }
    return [Number(num), i-1];
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
