/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {Point[]}
 */
var points = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]];
//var points = [[1,2],[2,2],[4,2]];

var outerTrees = function() {
    var fence = [points[0], points[1], points[2]],
        refPt = getRefPt(fence);
    
    for(var i = 3; i < points.length; i++) {
        var currentPt = points[i];
        fence = updateFence(fence, currentPt, refPt);
        refPt = getRefPt(fence);
    }
    //validate first 3 points after this
    if(fence.length > 3) {
        for(i = 2; i >= 0; i--) {
            var currentPt = fence.splice(i,1)[0];
            refPt = getRefPt(fence);
            fence = updateFence(fence, currentPt, refPt);
            refPt = getRefPt(fence);
        }
    }
    
    alert(fence);
    return fence;
};

function updateFence(fence, newPt, refPt) {
    var lastPt = fence[0],
        lastValidation = true;
    for(var i = 1; i <= fence.length; i++) {
        var currentPt = i == fence.length ? fence[0] : fence[i],
            isPtValid = validateNewPt(lastPt, currentPt, newPt, refPt);
        if(!lastValidation && !isPtValid) {
            fence[i-1][0] = newPt[0];
            fence[i-1][1] = newPt[1];
            return fence;
        }
        if(!lastValidation && isPtValid) {
            //include last pt in fence
            var leftArr = fence.splice(0, i-1);
            leftArr.push(newPt);
            fence = leftArr.concat(fence);
            return fence;
        }
        if(lastValidation && !isPtValid) {
            lastValidation = false;
        }
        lastPt = currentPt;
    }
    return fence;
}

function validateNewPt(fPt, sPt, newPt, refPt) {
    if(fPt[0] == sPt[0]) {
        if(Math.sign(refPt[0] - fPt[0]) == Math.sign(newPt[0] - fPt[0])) {
            return true;
        } else {
            return false;
        }
    }
    var m = (sPt[1] - fPt[1])/(sPt[0] - fPt[0]),
        refSide = refPt[1] - m * (refPt[0] - sPt[0] + sPt[1]),
        newSide = newPt[1] - m * (newPt[0] - sPt[0] + sPt[1]);
    if(Math.sign(refSide) == Math.sign(newSide)) {
        return true;
    }
    return false;
}

function getRefPt(fence) {
    var refPt = [0, 0];
    for(var i = 0; i < fence.length; i++) {
        refPt[0] += fence[i][0];
        refPt[1] += fence[i][1];
    }
    refPt[0] = refPt[0]/fence.length;
    refPt[1] = refPt[1]/fence.length;
    return refPt;
}
