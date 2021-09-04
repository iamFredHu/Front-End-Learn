const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('user data')
    },1000)
})

const result = p.then(value =>{
    console.log(value)
    // return new Promise((resolve,reject)=>{
    //     reject('error') // 返回的内容改变then 方法的值
    // })

    // 抛出错误
    throw new Error('出错了')
},reason=>{
    console.log(reason)
})

console.log(result)