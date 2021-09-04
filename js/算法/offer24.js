// 剑指Offer 24 反转链表
// 定义一个函数，输入头结点，翻转链表，并且输出反转后的头结点

// 1.迭代，改变前后关系
// var reverseList = function(head){
//     // 遍历链表时，将当前节点的next指针改为指向前一个节点，但是节点没有引用前面一个
//     // 节点，所以需要将前一个节点存起来

//     let prev = null
//     let curr = head

//     while(curr){
//         // 首先要把当前节点的next给存起来，不然断开了以后就找不到了
//         let nextLink = curr.next

//         // 然后，把next换成当前元素的前一个，
//         //比如1,2,3,null 1的next换成null（这里一开始就指定了），2的next换成1
//         curr.next = prev
//         prev = curr // 下一个节点的前一个节点就是当前的节点
//         curr = nextLink // 进入下一个节点
//     }
//     return prev
// }

// 总结，把当前节点的next节点给存起来，不然会断掉关系，然后把当前的next换成前一个元素，
// 下一个节点的前一个元素就是当前元素，然后进下一个节点

// 时间复杂度On 空间复杂度O1

// 2.递归
// 一句话概括 nk.next.next = nk
// 分析，当前的nk.next应该是nk+1，而我们需要翻转链表，所以把nk+1的next
// 变成nk，所以这里nk.next指的就是nk+1

var reverseList = function(head){
    if(head === null || head.next === null){
        return head
    }
    let newHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newHead
}

// 时间复杂度On 空间复杂度On