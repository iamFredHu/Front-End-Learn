// 集合 是 无序 且 不能重复的
function Set() {
    // 属性
    this.items = {}

    // 方法

    // add 方法
    Set.prototype.add = function (value) {
        if (this.has(value)) return fasle

        this.items[value] = value
        return true
    }

    // has 方法
    Set.prototype.has = function (value) {
        return this.items.hasOwnProperty(value)
    }

    // remove 方法
    Set.prototype.remove = function (velue) {
        // 首先判断集合中是否包含该元素
        if (!this.has(value)) {
            return false
        }

        delete this.items[value]
        return true
    }

    // clear 方法
    Set.prototype.clear = function () {
        this.items = {}
    }

    // size 方法
    Set.prototype.size = function () {
        return Object.keys(this.items).length
    }

    // 获取集合中所有的值
    Set.prototype.values = function () {
        return Object.keys(this.items)
    }

    // 集合间操作（略）

    // 并集
    Set.prototype.union = function (otherSet) {
        // this 集合对象 A
        // otherSet 集合对象 B
        var unionSet = new Set()

        var values = this.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        // 取出B集合中的元素，判断是否需要加入新集合
        values = otherSet.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        return otherSet

    }

}
