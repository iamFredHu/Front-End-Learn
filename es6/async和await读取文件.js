// 引入fs
const fs = require('fs')

// 读取第一个文件
function readOne(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./resources/1.md',(err,data)=>{
            if(err) reject(err)
            if(data) resolve(data.toString())
        })
    })
}

// 读取第二个文件
function readTwo(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./resources/2.md',(err,data)=>{
            if(err) reject(err)
            if(data) resolve(data.toString())
        })
    })
}

// 读取第三个文件
function readThree(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./resources/3.md',(err,data)=>{
            if(err) reject(err)
            if(data) resolve(data.toString())
        })
    })
}

async function main(){
    let One = await readOne()
    let Two = await readTwo()
    let Three = await readThree()
    console.log(One,Two,Three)
}

main()