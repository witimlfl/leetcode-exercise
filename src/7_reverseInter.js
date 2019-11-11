function main(x) {
    let flag = false;
    let data = x + '';

    if(x < 0) {
        flag = true
        data = (0 - x) + '';
    }
    data = data.split('').reverse().join('');
    data = flag ? 0 - Number(data) : Number(data);

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