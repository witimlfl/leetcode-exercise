/**
 * integer range: [−231,  231 − 1]. 
 * 1.翻转之后应该在这个范围
 * 2.正反大于小于0处理
 * 3.字符串翻转
 * @param {*} x 
 */
function main(x) {
    let flag = false;
    let data = x.toString();

    if(x < 0) {
        flag = true
        data = (0 - x).toString();
    }
    data = data.split('').reverse().join('');
    data = flag ? -Number(data) : Number(data);

    if(data > 2147483647 || data < -2147483648) {
        return 0
    }
    return data
}

var reverse = function(x) {
    let a = ''
   if ( x < 0 ) a = '-'
   let data = Math.abs(x).toString().split('')
   if ( data.length < 2 ) return x
   if ( data.length >= 32 ) return 0
 
   a = a + Number(data.reverse().join(''))
   if ( a > (Math.pow(2, 31) - 1) || a < Math.pow(-2, 31) ) {
     return 0
   } else{
     return a
   }
 };
console.log("1534236469 -->", main(1534236469))
console.log("-1534236469 -->", main(-1534236469))
console.log("-123 -->", main(-123))
console.log("120 -->", main(120))
console.log("-120 -->", main(-120))