// 两种实现方式——数组和链表（JavaScript没有自带链表结构），因此这里的栈结构基于数组实现

// 封装栈类
function Stack() {
    // 栈中的属性
    this.items = []

    // 对于栈的相关操作


    // 将元素压入栈
    Stack.prototype.push = function (element) {
        this.items.push(element)
    }

    // 取出栈顶元素
    Stack.prototype.pop = function () {
        return this.items.pop()
    }

    // 查看栈顶元素
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1]
    }

    // 判断是否为空栈
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0
    }


    // 获取栈中元素个数
    Stack.prototype.size = function () {
        return this.items.length
    }

    // toString
    Stack.prototype.toString = function () {
        var str = ''
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + ' '
        }
        return str
    }
}

// 栈的使用
var s = new Stack()

s.push(20)
s.push(10)
s.push(25)
s.push(66)
s.push(22)

console.log(s)
s.pop()
console.log(s)
console.log(s.peek())
console.log(s.isEmpty())
console.log(s.size())
console.log(s.toString())

// 十进制转为二进制
function dec2bin(decNumber){
    var stack = new Stack()
    while(decNumber > 0)
    {
        // 获取余数，放入栈中
        stack.push(decNumber%2)

        // 获取整除后的结果作为下一次运算的数字 floor 向下取整
        decNumber = Math.floor(decNumber / 2)

    }
    var binNumber = ''
    while(!stack.isEmpty())
    {
        binNumber += stack.pop()
    }
    return binNumber
}

console.log(dec2bin(100))