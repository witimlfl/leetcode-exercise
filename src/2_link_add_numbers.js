/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let output = [];
    let res = null;
    let flag = 0;

    while(l1 || l2) {
        let a1= l1 ? l1.val : 0;
        let a2 = l2 ? l2.val : 0;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        let data = a1 + a2 + flag;
        flag = Math.floor(data/10);
        let item = new ListNode(data%10);
        if(output[0]) {
           output[0].next = item;
           output[0] = output[0].next;
        } else {
            res = output[0] = item;
        }   
    }
   if(flag === 1) {
       output[0].next = new ListNode(1);
   }
    return res;
}

console.log('addTwoNumbers -->', addTwoNumbers([1,2,3], [2,8,7]))