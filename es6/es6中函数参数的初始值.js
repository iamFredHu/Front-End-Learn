// 1.形参的初始值 具有默認值的参数，一般位置要靠后
function add(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(add(1, 2, 3)) // 6
console.log(add(1, 2)) // 4 此时 c为函数的初始值 1

// 2.可以与解构赋值结合使用
function connect({ host, username, password, port }) {
    let host = host
    let username = username
    let password = password
    let port = port

}

connect({
    host: 'localhost',
    username: 'root',
    password: 'root',
    port: 3306
})