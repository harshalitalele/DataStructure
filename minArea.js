var points = [[21080,11854],[9564,5536],[10136,13399],[9116,8517],[12178,11167],[14465,11539],[5816,13867],[9572,18733],[11317,9594],[20555,22879],[6500,5440],[2192,8839],[8719,319],[5888,16550],[9637,5506],[16100,15840],[9636,13457],[7020,4960],[21013,13498],[11244,9624],[14908,22600],[569,5989],[14264,9177],[848,5863],[12212,16493],[4399,787],[16620,15360],[11020,4887],[13940,22564],[10297,7989],[7957,7702],[13824,12609],[8676,11949],[1913,8965],[3887,12660],[6996,15697],[11993,7448],[9265,7209],[8108,16125],[12052,5667]];

var points = [[13,15],[50,73],[44,48],[22,8],[29,73],[54,23],[19,6],[64,94],[75,58],[79,69],[16,17],[29,38]];

var points = [[7,3],[8,12],[13,5],[6,2],[8,0],[12,8],[14,2],[2,6]];

var points = [[1,2],[2,1],[1,0],[0,1]];

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
        if(isArea.length > 0) {
            areas = areas.concat(isArea);
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
    return false;
}

function isRect(pts) {
    var fPt = pts[0],
        fslopes = [],
        areas = [];
    for(var i = 1; i < pts.length; i++) {
        var sPt = pts[i],
            slope = (sPt[1] - fPt[1])/(sPt[0] - fPt[0]);
        fslopes.push(slope);
    }
    /*if(checkAngle(fslopes[1], fslopes[2])) {
        return validateLengths(pts[0], pts[2], pts[1], pts[3]);
    } else if(checkAngle(fslopes[0], fslopes[2])) {
        return validateLengths(pts[0], pts[1], pts[2], pts[3]);
    } else if(checkAngle(fslopes[0], fslopes[1])) {
        return validateLengths(pts[0], pts[1], pts[3], pts[2]);
    }*/
    
    if(Math.round(fslopes[1]*fslopes[2]) == -1 || isNaN(fslopes[1]*fslopes[2])) {
        var area = validateLengths(pts[0], pts[2], pts[1], pts[3]);
        if(area) {
            areas.push(area);
        }        
    } 
    if(Math.round(fslopes[0]*fslopes[2]) == -1 || isNaN(fslopes[0]*fslopes[2])) {
        var area = validateLengths(pts[0], pts[1], pts[2], pts[3]);
        if(area) {
            areas.push(area);
        }
    }
    if(Math.round(fslopes[0]*fslopes[1]) == -1 || isNaN(fslopes[0]*fslopes[1])) {
        var area = validateLengths(pts[0], pts[1], pts[3], pts[2]);
        if(area) {
            areas.push(area);
        }
    }
    
    /*if(((fslopes[1]*fslopes[2]) > -2 && (fslopes[1]*fslopes[2]) < 0) || isNaN(fslopes[1]*fslopes[2])) {
        return validateLengths(pts[0], pts[2], pts[1], pts[3]);
    } else if(((fslopes[0]*fslopes[2]) > -2 && (fslopes[0]*fslopes[2]) < 0) || isNaN(fslopes[0]*fslopes[2])) {
        return validateLengths(pts[0], pts[1], pts[2], pts[3]);
    } else if(((fslopes[0]*fslopes[1]) > -2 && (fslopes[0]*fslopes[1]) < 0) || isNaN(fslopes[0]*fslopes[1])) {
        return validateLengths(pts[0], pts[1], pts[3], pts[2]);
    }*/
    return areas;
}

function checkAngle(m1, m2) {
    return Math.atan((m1 - m2)/(1+m1*m2)) == Math.PI/2;
}
