//var grid = [[1,2,3],[4,5,6]];
/*var grid = [[2]];
var grid = [[1,2],[3,4]];*/
var grid = [[2,2,2],[2,1,2],[2,2,2]];

var calculateArea = function() {
    var area = 0,
        w = grid.length,
        b = grid[0].length;
    
    for(var i = 0; i < w; i++) {
        for(var j = 0; j < b; j++) {
            var h = grid[i][j],
                cellArea = 4*h + 2,
                nh = 0;
            if(h <= 0) {
                continue;
            }
            if(i-1 >= 0) {
                nh = grid[i-1][j];
                if(nh >= h) {
                    cellArea -= h;
                } else {
                    cellArea -= nh;
                }
            }
            if(i+1 < w) {
                nh = grid[i+1][j];
                if(nh >= h) {
                    cellArea -= h;
                } else {
                    cellArea -= nh;
                }
            }
            if(j-1 >= 0) {
                nh = grid[i][j-1];
                if(nh >= h) {
                    cellArea -= h;
                } else {
                    cellArea -= nh;
                }
            }
            if(j+1 < b) {
                nh = grid[i][j+1];
                if(nh >= h) {
                    cellArea -= h;
                } else {
                    cellArea -= nh;
                }
            }
            
            area += cellArea;
        }
    }
    alert(area);
};
