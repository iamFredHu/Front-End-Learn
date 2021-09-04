// 剑指Offer 06 从头到尾打印链表
// 输入一个链表的头节点，从尾到头反过来返回每个节点的值

// var reversePrint = function(head) {
//     // 如果head === null return []
//     if(head === null){
//         return []
//     }
//     let resultList = []
//     while(head){
//         resultList.push(head.val)
//         head = head.next
//     }
//     return resultList.reverse()
// }

var reversePrint = function (head) {
    let stack = []
    let resultList = []
    while (head) {
        stack.push(head.val)
        head = head.next
    }
    // 这里注意，后面再函数中使用pop会导致stack的长度发生变化，所以需要先将长度保存下来
    let stackLength = stack.length
    for (let i = 0; i < stackLength; i++) {
        resultList[i] = stack.pop()
    }
    return resultList
}

