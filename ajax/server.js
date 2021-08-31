// 1.引入express
const { response } = require('express')
const express = require('express')

// 2.创建应用对象
const app = express()

// 3.创建路由规则
// request 请求报文 response 响应报文
app.all('/server', (request, response) => {
    // 设置响应头 设置允许跨域 
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 设置响应体
    response.send('HELLO AJAX')
})

app.all('/json-server', (request, response) => {
    // 设置响应头 设置允许跨域 
    response.setHeader('Access-Control-Allow-Origin', '*')

    const data = {
        name: '哈工大深圳'
    }

    // 设置响应体
    response.send(JSON.stringify(data))
})

app.all('/axios-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    const data = {
        name: '哈工大深圳'
    }

    // 设置响应体
    response.send(JSON.stringify(data))
})

app.get('/delay', (request, response) => {
    // 设置响应头 设置允许跨域 
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 延时
    setTimeout(() => { response.send('HELLO 延时') }, 3000)
})

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中……")
})