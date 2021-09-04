// ES6 引入的异步编程新解决方案，构造函数，用来封装异步操作
// 构造函数 Promise (excutor){}

const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let data = '用户数据库中的数据'
        // resolve
        // resolve(data) // 状态变成成功

        let error = '数据读取失败'
        reject(error)
    }, 1000);
})


// 调用Promise对象的then方法
p.then(function (value) {
    // 调了resolve 执行这个方法
    console.log(value)
}, function (reason) { 
    console.log(reason)
})