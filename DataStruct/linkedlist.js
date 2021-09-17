function LinkedList() {
    // 节点类
    function Node(data) {
        this.data = data
        this.next = null
    }

    // 属性
    this.head = null
    this.length = 0

    // append 方法
    LinkedList.prototype.append = function (element) {
        // 根据 element 创建节点
        var newNode = new Node(element)

        // 首先判断节点是否为空（第一次添加）
        if (this.head === null) {
            this.head = newNode
        } else {
            // 如果不是第一次添加，则需要将最后一个节点的next指向最新的节点

            // 从头开始遍历，使用currNode进行记录
            var currNode = this.head
            while (currNode.next) {
                currNode = currNode.next
            }
            // 直到找到最后一个节点
            currNode.next = newNode
        }

        // 记录链表的长度 +1
        this.length++
    }

    // toString 方法
    LinkedList.prototype.toString = function () {
        // 从 head 开头，获取每一个元素，遍历循环每一个几点，取出其中的 element ,拼接成为字符串

        var currNode = this.head
        var resultString = ''

        while (currNode) {
            resultString += currNode.data + ' '
            currNode = currNode.next
        }

        return resultString
    }

    // insert 方法
    LinkedList.prototype.insert = function (position, element) {
        // 首先要对 position 进行越界判断

        // 负数 return false | 大于当前 length return false
        if (position < 0 || position > this.length) return false

        // 根据 element 创建 newNode
        var newNode = new Node(element)

        // 插入的过程——特殊情况 position = 0（新插入的节点就是 head 所指向的节点，注意 head 指向的保存）
        if (position === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            // 插入的过程——一般情况
            var index = 0
            var currNode = this.head
            var prevNode = null
            while (index++ < position) {
                prevNode = currNode
                currNode = currNode.next
            }
            newNode.next = currNode
            prevNode.next = newNode
        }

        this.length++
        return true
    }

    // get 方法
    LinkedList.prototype.get = function (position) {
        // 越界判断 注意 >= length
        if (position < 0 || position >= this.length) return false

        // 获取对应的 数据
        var currNode = this.head
        var index = 0
        while (index++ < position) {
            currNode = currNode.next

        }
        return currNode.data
    }

    // indexOf 方法
    LinkedList.prototype.indexOf = function (element) {
        var currNode = this.head
        var index = 0

        while (currNode) {
            if (currNode.data === element) {
                return index
            }
            currNode = currNode.next
            index++
        }
        return -1

    }

    // update 方法
    LinkedList.prototype.update = function (position, newElement) {
        // 越界判断 注意 >= length
        if (position < 0 || position >= this.length) return false

        // 获取对应的数据
        var currNode = this.head
        var index = 0
        while (index++ < position) {
            currNode = currNode.next
        }

        // 修改对应的数据
        currNode.data = newElement


    }

    // removeAt 方法
    LinkedList.prototype.removeAt = function (position) {
        // 越界判断 注意 >= length
        if (position < 0 || position >= this.length) return null

        var currNode = this.head
        var prevNode = null
        var index = 0

        // 特殊情况 position = 0
        if (position === 0) {
            this.head = this.head.next
        } else {
            while (index++ < position) {
                prevNode = currNode
                currNode = currNode.next
            }
            prevNode.next = currNode.next
        }

        // 不要忘记改变长度
        this.length--

        // 返回被删除掉的元素
        return currNode.data
    }

    // remove 方法
    LinkedList.prototype.remove = function (element) {
        // 获取 元素 在列表中的位置信息
        var position = this.indexOf(element)

        return this.removeAt(position)
    }

    // isEmpty 方法
    LinkedList.prototype.isEmpty = function () {
        return this.length === 0
    }

    // size 方法
    LinkedList.prototype.size = function () {
        return this.length
    }
}


// 下面是代码调试内容
var ll = new LinkedList()

ll.append("abc")
ll.append("666")
ll.insert(0, "aaa")
ll.insert(2, "bbb")
ll.update(0, "xyz")
// ll.removeAt(1)

console.log(ll.toString())
console.log(ll.get(2))
console.log(ll.indexOf("ddd"))
console.log(ll.indexOf("666"))
console.log(ll.isEmpty())
console.log(ll.size())