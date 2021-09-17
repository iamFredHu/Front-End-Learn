const { networkInterfaces } = require("os")
const { threadId } = require("worker_threads")

function DoublyLinkedList() {
    // 节点类
    function Node(element) {
        this.element = element
        this.prev = null
        this.next = null
    }

    // 属性
    this.head = null
    this.tail = null // 尾部
    this.length = 0

    // append 方法
    DoublyLinkedList.prototype.append = function (element) {
        // 根据 element 创建相应的节点
        var newNode = new Node(element)

        // 判断是否为第一个节点
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail // 新添加的 element 前一个项 是当前的尾部项
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
    }

    // toString 方法
    DoublyLinkedList.prototype.toString = function () {
        return this.backwardString()
    }

    // forwardString 方法
    DoublyLinkedList.prototype.forwardString = function () {
        var currNode = this.tail
        var resultString = ""

        // 依次向前办理
        while (currNode) {
            resultString += currNode.element + " "
            currNode = currNode.prev
        }

        return resultString
    }

    // backwardString 方法（从后向前）
    DoublyLinkedList.prototype.backwardString = function () {
        // 定义变量
        var currNode = this.head
        var resultString = ""

        // 依次向后遍历
        while (currNode) {
            resultString += currNode.element + " "
            currNode = currNode.next
        }

        return resultString
    }

    // insert 方法
    DoublyLinkedList.prototype.insert = function (position, element) {
        // 越界判断
        if (position < 0 || position > this.length) return null

        // 创建新节点
        var newNode = new Node(element)

        // 插入节点

        // 原来就为空
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            // position 是否为 0 
            if (position === 0) {
                this.head.prev = newNode
                newNode.next = this.head
                this.head = newNode
            } else if (position === this.length) {
                // 现在 position 变成最后一个节点，即在最后一个节点后边插入
                newNode.prev = this.tail
                this.tail.next = newNode
                this.tail = newNode
            } else {
                // 插入到中间位置
                var currNode = this.head
                var index = 0
                while (index++ < position) {
                    currNode = currNode.next
                }
                newNode.prev = currNode.prev
                newNode.next = currNode
                currNode.prev.next = newNode
                // 最后再修改 currNode.prev
                currNode.prev = newNode
            }
        }

        // 改变长度
        this.length++

        return true

    }

    // get 方法
    DoublyLinkedList.prototype.get = function (position) {
        // 越界判断
        if (position < 0 || position >= this.length) return null

        if (this.length / 2 > position) {
            // 前半，从前往后
            var currNode = this.head
            var index = 0
            while (index++ < position) {
                currNode = currNode.next
            }
        } else {
            // 后半，从后往前
            var currNode = this.tail
            var index = this.length - 1
            while (index-- > position) {
                currNode = currNode.prev
            }
        }

        return currNode.element
    }

    // indexOf 方法
    DoublyLinkedList.prototype.indexOf = function (element) {
        var currNode = this.head
        var index = 0

        while (currNode) {
            if (currNode.element === element) {
                return index
            }
            currNode = currNode.next
            index++
        }
        return -1
    }

    // update 方法
    DoublyLinkedList.prototype.update = function (position, newElement) {
        // 越界判断
        if (position < 0 || position >= this.length) return false

        if (this.length / 2 > position) {
            // 前半，从前往后
            var currNode = this.head
            var index = 0
            while (index++ < position) {
                currNode = currNode.next
            }
            currNode.element = newElement
        } else {
            // 后半，从后往前
            var currNode = this.tail
            var index = this.length - 1
            while (index-- > position) {
                currNode = currNode.prev
            }
            currNode.element = newElement
        }

        return true
    }

    // removeAt 方法
    DoublyLinkedList.prototype.removeAt = function (position) {
        // 越界判断
        if (position < 0 || position >= this.length) return null

        var currNode = this.head
        // 情况判断：是否只有一个节点？ 删除首元素；删除尾元素；删除中间元素
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            if (position === 0) {
                this.head.next.prev = null
                this.head = this.head.next
            } else if (position === this.length - 1) {
                currNode = this.tail
                this.tail.prev.next = null
                this.tail = this.tail.prev
            } else {
                var index = 0
                while (index++ < position) {
                    currNode = currNode.next
                }
                currNode.prev.next = currNode.next
                currNode.next.prev = currNode.prev
            }
        }

        // 涉及长度改变，需要进行记录
        this.length--

        return currNode.element
    }

    // remove 方法
    DoublyLinkedList.prototype.remove = function (element) {
        var index = this.indexOf(element)

        return this.removeAt(index)
    }

    // isEmpty 方法
    DoublyLinkedList.prototype.isEmpty = function () {
        return this.length === 0
    }

    // size 方法
    DoublyLinkedList.prototype.size = function () {
        return this.length
    }

    // getHead 方法
    DoublyLinkedList.prototype.getHead = function () {
        return this.head.element
    }

    // getTail 方法
    DoublyLinkedList.prototype.getTail = function () {
        return this.tail.element
    }
}

// 测试代码
var dll = new DoublyLinkedList()
dll.append("abc")
dll.append("123")
dll.append("hello")
dll.append("world")
dll.append("hitsz")
dll.append("test")
dll.insert(2, "11111")
dll.insert(0, "22222")
dll.insert(8, "33333")
dll.update(5, "notworld")
dll.insert(1, "abcd")
dll.removeAt(0)
dll.removeAt(8)
dll.removeAt(4)
dll.remove("notworld")


console.log(dll.toString())
console.log(dll.forwardString())
console.log(dll.backwardString())
console.log(dll.get(4))
console.log(dll.indexOf("11111"))
console.log(dll.indexOf("aaa"))

console.log(dll.isEmpty())
console.log(dll.size())
console.log(dll.getHead())
console.log(dll.getTail())