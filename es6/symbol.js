// 新的数据类型 JavaScript的第七种数据类型 类似字符串 值唯一 不能运算 不能用for…in循环遍历 Reflect.ownKeys可以遍历

let s1 = Symbol()

console.log(s1, typeof s1) // Symbol() symbol 唯一性对我们来说不可见

let s2 = Symbol('哈工深')

console.log(s2, typeof s2) // Symbol(哈工深) symbol

let s3 = Symbol('哈工深')

console.log(s2 === s3) // false

let s4 = Symbol.for('测试')

console.log(s4, typeof s4) // Symbol(测试) symbol

let s5 = Symbol.for('测试')

console.log(s4 === s5) // true 注意区别 这里是相等的

// symbol 不能进行运算

// 7种数据类型 USONB undefined string symbol object number null boolean


// 对象添加 symbol

let game = {
    up: 1,
    down: 2
}

let methods = {
    up: Symbol(),
    down: Symbol()
}

game[methods.up] = function(){
    console.log('up')
}

game[methods.down] = function(){
    console.log('down')
}

console.log(game)