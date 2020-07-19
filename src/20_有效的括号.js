/**
20.Valid Parentheses
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


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const len = s.length
    if(!len) {
        return true;
    }
    if(len % 2) {
        return false
    }
    const arr = []
    for(let i = 0; i < len; i++) {
        let letter = s[i]
        switch(letter) {
            case '{':
            case '[':
            case '(':
                arr.push(letter)
            break;
            case '}' :
               if(arr.pop() !== '{')  return false;
             break;
            case ']' :
                 if(arr.pop()  !== '[')  return false;
             break;
            case ')' :
                if(arr.pop()  !== '(')  return false;
        }
    }
    return !arr.length
};

var isValid = function(s) {
    const len = s.length
    if(!len) {
        return true;
    }
    if(len % 2 === 1 || ([')', ']', '}'].indexOf(s[0]) > -1) ) {
        return false
    }
    const arr = []
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for(let i = 0; i < len; i++) {
        let letter = s[i]
        if(map[letter]) {
            arr.push(letter)
        } else if(letter !== map[arr.pop()]) {
            return false
        }
    }
    return arr.length === 0
};
