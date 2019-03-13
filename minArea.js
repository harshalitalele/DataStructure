var points = [[13,15],[50,73],[44,48],[22,8],[29,73],[54,23],[19,6],[64,94],[75,58],[79,69],[16,17],[29,38]];
var minAreaFreeRect = function() {
    var fPt = 0, 
        sPt = 1, 
        tPt = 2,
        lPt = 3,
        n = points.length,
        trioPoss = n*(n-1)*(n-2)*(n-3)/24,
        areas = [];
        
    for(var i = 0; i < trioPoss; i++) {        
        if (lPt > n - 1) {
            tPt++;
            lPt = tPt + 1;
        } 
        if (tPt > n - 2) {
            sPt++;
            tPt = sPt + 1;
            lPt = tPt + 1;
        } 
        if (sPt > n - 3) {
            fPt++;
            sPt = fPt + 1;
            tPt = sPt + 1;
            lPt = tPt + 1;
        } 
        if (fPt > n - 3) {
            alert("done!");
        }
        
        var tempPts = [points[fPt], points[sPt], points[tPt], points[lPt]];
        
        var isArea = isRect(tempPts);
        if(isArea) {
            areas.push(isArea);
        }
        
        lPt++;
    }
    if(areas.length > 0) {
        alert(Math.min.apply(null, areas).toFixed(5));
        return Math.min.apply(null, areas).toFixed(5);
    }
    alert(0);
    return 0;
};

function validateLengths(pt1, pt2, pt3, pt4) {
    var l1 = Math.sqrt((pt2[1] - pt1[1])*(pt2[1] - pt1[1]) + (pt2[0] - pt1[0])*(pt2[0] - pt1[0])),
        w1 = Math.sqrt((pt4[1] - pt1[1])*(pt4[1] - pt1[1]) + (pt4[0] - pt1[0])*(pt4[0] - pt1[0])),
        l2 = Math.sqrt((pt4[1] - pt3[1])*(pt4[1] - pt3[1]) + (pt4[0] - pt3[0])*(pt4[0] - pt3[0])),
        w2 = Math.sqrt((pt2[1] - pt3[1])*(pt2[1] - pt3[1]) + (pt2[0] - pt3[0])*(pt2[0] - pt3[0]));
    if(l1 == l2 && w1 == w2) {
        return l1*w1;
    }
    return false
}

function isRect(pts) {
    var fPt = pts[0],
        fslopes = [],
        area = 0;
    for(var i = 1; i < pts.length; i++) {
        var sPt = pts[i],
            slope = (sPt[1] - fPt[1])/(sPt[0] - fPt[0]);
        fslopes.push(slope);
        console.log(slope);
    }
    if(((fslopes[0]*fslopes[1]) > -2 && (fslopes[0]*fslopes[1])< 0) || isNaN(fslopes[0]*fslopes[1])) {
        return validateLengths(pts[0], pts[1], pts[3], pts[2]);
    } else if(((fslopes[0]*fslopes[2]) > -2 && (fslopes[0]*fslopes[2]) < 0) || isNaN(fslopes[0]*fslopes[2])) {
        return validateLengths(pts[0], pts[1], pts[2], pts[3]);
    } else if(((fslopes[1]*fslopes[2]) > -2 && (fslopes[1]*fslopes[2]) < 0) || isNaN(fslopes[1]*fslopes[2])) {
        return validateLengths(pts[0], pts[2], pts[1], pts[3]);
    }
    return false;
}
