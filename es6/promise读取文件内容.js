// 引入fs
const fs = require('fs')

// 调用方法 读取文件
// fs.readFile('./resources/宣言.md',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString())
// })

// 使用Promise封装
const p = new Promise(function(resolve,reject){
    fs.readFile('./resources/宣言.md',(err,data)=>{
        if(err) reject(err)
        if(data) resolve(data.toString())
    })
})

p.then(function(value){
    console.log(value)
},function(reason){
    console.log(reason)
})