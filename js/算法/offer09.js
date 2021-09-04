// 剑指 Offer 09 用两个栈实现队列
// 核心思路：首先要弄清楚栈和队列的特性，栈后入先出，队列先入先出
// 把两个栈分为入队栈和出队栈，出队是首先检查出队栈有没有数据，如果没有则需要从入堆栈倒入，然后再操作

var CQueue = function () {
    this.inStack = []
    this.outStack = []
}

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    // 如果需要appendTail，则将数据压入入队栈中
    this.inStack.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if(!this.outStack.length){
        // 如果出队栈中没有值，则到入队栈中全部取出
        if(!this.inStack.length){
            // 如果入队栈里面也没有值，返回-1
            return -1
        }
        while(this.inStack.length){
            this.outStack.push(this.inStack.pop())
        }
    }
    return this.outStack.pop()
}
