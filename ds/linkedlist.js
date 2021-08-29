// 首先创建一个链表类
function Linkedlist() {
    // 封装一个Node类，用于保存每个节点的信息
    function Node(element) {
        this.element = element
        this.next = null
    }

    // 链表中的属性
    this.length = 0 // 链表的长度
    this.head = null // 链表中的第一个节点

    // 链表中的方法

    // append(element) 向列表尾部添加一个新的项
    Linkedlist.prototype.append = function (element) {

    }

    // insert(position,element) 向列表的特定位置插入一个新的项

    // get(position) 获取对应位置的元素

    // indexOf(element) 返回元素在列表中的索引，如果列表中没有该元素则返回-1

    // update(position) 修改某个位置的元素

    // removeAt(position) 从列表的特定位置移除一项

    // remove(element) 从列表中移除一项

    // isEmpty()

    // size()

    // toString() 由于列表项使用了Node类，需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值
}