// 实现方式：基于数组、基于链表

// 首先选择基于数组
function Queue() {
    // 属性
    this.items = []

    // 方法
    // enqueue 进入列队
    Queue.prototype.enqueue = function (element) {
        this.items.push(element)
    }

    // dequeue 移除第一项，返回被移除的元素
    Queue.prototype.dequeue = function () {
        let frontElement = this.items[0]
        // shift方法可以删除第一个元素
        this.items.shift()
        return frontElement
    }

    // front 返回第一个元素
    Queue.prototype.front = function () {
        return this.items[0]
    }
    // isEmpty
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0
    }
    // size
    Queue.prototype.size = function () {
        return this.items.length
    }
    // toString
    Queue.prototype.toString = function () {
        let str = ''
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + ' '
        }
        return str
    }
}

var queue = new Queue()

queue.enqueue('abc')
queue.enqueue('hitsz')
queue.enqueue('hbshgzx')
queue.enqueue('frontend')

console.log(queue)

queue.dequeue()

console.log(queue)

console.log(queue.front())

console.log(queue.isEmpty())

console.log(queue.size())

console.log(queue.toString())

console.log(typeof queue.toString())

// 击鼓传花
function passParcel(name, number) {
    let nameQueue = new Queue()

    // 所有人加到队列中
    for (let i = 0; i < name.length; i++) {
        nameQueue.enqueue(name[i])
    }

    // 开始数数，数到对应数字淘汰
    // 如果数的不是这个数字，重新加到队列末尾
    // 是这个数字 淘汰
    while (nameQueue.size() > 1) {
        for (let i = 0; i < number - 1; i++) {
            // number之前的人，重新加入队尾
            nameQueue.enqueue(nameQueue.dequeue())
            console.log(nameQueue)
        }
        // 淘汰掉number对应的那个人
        console.log(nameQueue.dequeue())
    }

    return nameQueue.front()

}

console.log(passParcel([1, 2, 3, 4, 5], 6))

// 封装优先级队列
function PriorityQueue() {
    var items = []

    // 封装一个新的构造函数, 用于保存元素和元素的优先级
    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    // 添加元素的方法
    this.enqueue = function (element, priority) {
        // 1.根据传入的元素, 创建新的QueueElement
        var queueElement = new QueueElement(element, priority)

        // 2.获取传入元素应该在正确的位置
        if (this.isEmpty()) {
            items.push(queueElement)
        } else {
            var flag = false
            for (var i = 0; i < items.length; i++) {
                // 注意: 我们这里是数字越小, 优先级越高
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement)
                    flag = true
                    break
                }
            }

            // 遍历完所有的元素, 优先级都大于新插入的元素时, 就插入到最后
            if (!flag) {
                items.push(queueElement)
            }
        }
    }

    // 删除元素的方法
    this.dequeue = function () {
        return items.shift()
    }

    // 获取前端的元素
    this.front = function () {
        return items[0].element
    }

    // 查看元素是否为空
    this.isEmpty = function () {
        return items.length === 0
    }

    // 获取元素的个数
    this.size = function () {
        return items.length
    }
}
var pqueue = new PriorityQueue()

pqueue.enqueue('abc',100)
pqueue.enqueue('hitsz',200)
pqueue.enqueue('hbshgzx',1)
pqueue.enqueue('frontend',300)

console.log(pqueue)

pqueue.dequeue()

console.log(pqueue)

console.log(pqueue.front())

console.log(pqueue.isEmpty())

console.log(pqueue.size())

console.log(pqueue.toString())

console.log(typeof pqueue.toString())