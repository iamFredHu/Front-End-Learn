// let 用于声明变量
let a
let b, c, d
let e = 100
let f = 200, g = 'hello', h = []

// 变量不能重复声明 而 var 可以重复声明

// 块级作用域
{
    let girl = 'you'
    console.log(girl) // 只能在这个块中读取到，在外边读取不到
}

// 不允许在变量声明前使用（var）可以

// 不影响作用域链
{
    let school = '哈工大（深圳）'
    function fn(){
        console.log(school) // 输出没问题
    }
    fn()
}