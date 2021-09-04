// 读取3文件

const fs = require("fs")

const p = new Promise((resolve,reject)=>{
    fs.readFile("./resources/1.md",(err,data)=>{
        resolve(data)
    })
})



p.then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("./resources/2.md",(err,data)=>{
            resolve([value,data])
        })
    })
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("./resources/3.md",(err,data)=>{
            value.push(data)
            resolve(value)
        })
    })
}).then(value=>console.log(value.join('\r\n')))

