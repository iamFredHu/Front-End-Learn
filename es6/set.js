// // Set 类似 数组 但是值唯一 可以使用扩展预算符 for of
// let s = new Set()
// console.log(s, typeof s)

// let s2 = new Set([2, 3, 4, 5, 1, 1, 1, 1])
// console.log(s2) // Set(5) { 2, 3, 4, 5, 1 }
// console.log(s2.size)
// console.log(s2.add(10))
// console.log(s2.delete(3))
// console.log(s2.has(3))
// // s2.clear()

// for (let v of s2) {
//     console.log(v)
// }

let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]

// 去重
let sarr = [...new Set(arr)]
console.log(sarr)

// 交集

let arr2 = [4, 5, 6, 5, 6, 7, 8]

let andresult = [...new Set(arr)].filter(item => new Set(arr2).has(item)
)

console.log(andresult)

// 并集

let orresult = [...new Set([...arr, ...arr2])]
console.log(orresult)

// 差集
let minusresult = [...new Set(arr)].filter(item => !(new Set(arr2).has(item))
)