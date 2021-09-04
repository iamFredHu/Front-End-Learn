const strs = ['str1', 'str2', 'str3', 'str4']

// 使用 for of 遍历数组

for (let v of strs) {
    console.log(v, typeof v)
}
// str1 string
// str2 string
// str3 string
// str4 string


for (let v in strs) {
    console.log(v, typeof v)
}

// 0 string
// 1 string
// 2 string
// 3 string

// for of 保存value for in 保存index 

let iterator = strs[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
// { value: 'str1', done: false }
// { value: 'str2', done: false }
// { value: 'str3', done: false }
// { value: 'str4', done: false }

const banji = {
    name: 'class5',
    students: [
        '1', '2', '3', '4', '5'
    ],
    [Symbol.iterator]() {
        // 索引变量
        let index = 0

        // 保存this
        let _this = this
        return {
            next: function () {
                if (index < _this.students.length) {
                    const result = { value: _this.students[index], done: false }
                    index++
                    return result
                } else {
                    return { value: undefined, done: true }
                }
            }
        }
    }

}

for (let v of banji) {
    console.log(v)
}