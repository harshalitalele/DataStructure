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
        updateFence(fence, currentPt, refPt);
        refPt = getRefPt(fence);
    }
    //validate first 3 points after this
    alert(fence);
    return fence;
};

function updateFence(fence, newPt, refPt) {
    var lastPt = fence[0],
        lastValidation = true;
    for(var i = 1; i < fence.length; i++) {
        var currentPt = fence[i],
            isPtValid = validateNewPt(lastPt, currentPt, newPt, refPt);
        if(!lastValidation && !isPtValid) {
            fence[i-1][0] = newPt[0];
            fence[i-1][1] = newPt[1];
            return;
        }
        if(!lastValidation && isPtValid) {
            //include last pt in fence
            fence.push(newPt);
            return;
        }
        if(lastValidation && !isPtValid) {
            lastValidation = false;
        }
        lastPt = currentPt;
    }    
}

function validateNewPt(fPt, sPt, newPt, refPt) {
    var m = (sPt[1] - fPt[1])/(sPt[0] - fPt[0]),
        c = m * sPt[0] - sPt[1],
        refSide = refPt[1] - m * refPt[0] - c,
        newSide = newPt[1] - m * newPt[0] - c;
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
