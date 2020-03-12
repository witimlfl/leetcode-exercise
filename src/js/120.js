/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if(!triangle) {
        return 0
    }
    let l = triangle.length;
    for(i = l-2; i >= 0; i -- ) {
        for(j = 0; j < triangle[i].length; j++ ) {
            triangle[i][j] = Math.min(triangle[i+1][j], triangle[i+1][j+1]) +  triangle[i][j] 
        }
    }
    return triangle[0][0]
};
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))