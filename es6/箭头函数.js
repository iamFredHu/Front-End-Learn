// 声明一个函数
let fun = (a, b) => {
    return a + b
}

console.log(fun(1, 2)) // 3

// 特性：this 是静态的，this 始终指向函数声明时所在作用域下的 this
let fun2 = () => {
    console.log(this.name)
}

// 不能作为构造实例化对象

// 不能使用 argument （保存实参） 变量

// 简写 省略小括号（形参有且只有一个）
// 省略花括号，当代码体只有一条语句，而且return必须省略，执行结果就是函数的返回值

let add = n => n++


nums = [3, 4, 1, 2, 5]
nums.sort((a, b) => {
    console.log(a)
    return a - b
})

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = 0
    let tempSum = 0
    for (let i = 1; i < nums.length + 1; i++) {
        for (let startIndex = 0; startIndex < nums.length - i + 1; j++) {
            for (let j = 0; j < i; j++) {
                tempSum += nums[i]
                if (tempSum > maxSum) {
                    maxSum = tempSum
                }
            }
            tempSum = 0
        }
    }
    return maxSum
};

// 箭头函数适合与this无关的回调 如定时器、数组的方法回调等
// 不适合与this有关的回调， 事件的回调、对象的方法等