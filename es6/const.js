// const 定义常量

// 一定要赋初值、用大写、不能修改值、块级作用域

{
    const A = 100
}
// console.log(A) // 报错

// 对于数组和对象的元素进行修改，不算常量的修改
const IG = ['TheShy', 'Ning', 'Rookie', 'Jackeylove', 'Baolan']
IG.push('Leyan')
// 地址没变，所以不算对于常量的修改

// 解构赋值

// 数组的解构
let [ts, ning, rk, jkl, bl] = IG
console.log(ts, ning, rk, jkl, bl) // TheShy Ning Rookie Jackeylove Baolan

// 对象的解构
const FRED = {
    name: 'Fred',
    age: 21,
    fn: function () {
        console.log('hello')
    }
}

let {name, age, fn} = FRED
console.log(name,age)
fn()
// Fred 21
// hello
