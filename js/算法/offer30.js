// 剑指Offer 30 包含min函数的栈
// 首先要定义栈的数据结构，调用 min、push 及 pop 的时间复杂度都是 O(1)

// 题目要求要在O(1)时间内找到最小值，所以不能在需要最小值的时候在找，而是要维护一个minStack，用于存放最小值
var MinStack = function () {
    this.stack = []
    this.minStack = [Infinity]
}

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
    this.stack.push(value)

    // 维护minStack，比较新入栈的值
    let minValue = Math.min(this.minStack[this.minStack.length - 1], value)
    this.minStack.push(minValue)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
    this.minStack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.minStack[this.minStack.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
