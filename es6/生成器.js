// // 生成器其实是特殊的函数 异步编程，回调函数
// function * gen(arg){
//     console.log(arg)
//     // console.log("PART1")
//     console.log(yield 'yield测试语句1') // 函数代码的分隔符，把函数代码切分成几块
//     // console.log("PART2")
//     console.log(yield 'yield测试语句2')
//     // console.log("PART3")
// }

// let iterator = gen('AAA')

// console.log(iterator.next('AAA')) // 注意返回值
// console.log(iterator.next('BBB'))


// 异步编程 案例

function one() {
    setTimeout(() => {
        let data = 'one'
        iterator.next(data)
    }, 1000);
}

function two() {
    setTimeout(() => {
        let data = 'two'
        iterator.next(data)
    }, 1000);
}

function three() {
    setTimeout(() => {
        let data = 'three'
    }, 1000);
}

function* gen() {
    yield one()
    yield two()
    yield three()
}

let iterator = gen()
iterator.next()