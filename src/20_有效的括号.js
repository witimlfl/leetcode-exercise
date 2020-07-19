/**
题目：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 0) {
        return true;
    }
    if(s.length % 2 === 1) {
        return false
    }
    const arr = []
    let res = true;
    for(let i = 0; i < s.length; i++) {
         if(s[0] === ')' || s[0] === '}' || s[0] === ']') {
            res = false
            break;
        }
        switch(s[i]) {
            case '{':
            case '[':
            case '(':
                arr.push(s[i])
            break;
            case '}' :
                arr[arr.length - 1] === '{' && arr.pop()
             break;
            case ']' :
                arr[arr.length - 1] === '['  && arr.pop()
             break;
            case ')' :
                arr[arr.length - 1] === '(' && arr.pop()
            break;
            default: break;
        }
        if(arr[0] === ')' || arr[0] === '}' || arr[0] === ']') {
            res = false
            break;
        }
    }

    return res && !arr.length
};
