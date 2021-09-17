// async 和 await 两种语法 可以让异步代码像同步代码一样

// async 函数的返回值 是一个 promise 对象


    // 如果返回的不是 Promise 对象，默认是一个成功的 Promise

    // 抛出错误 返回的就是失败的 Promise
    // throw new Error("出错啦")

    // 返回的结果如果是一个 Promise 对象

    const p = new Promise((resolve,reject)=>{
        setTimeout(() => {
            // resolve("用户数据")
            reject("获取失败")
        }, 1000);
    })

    async function main(){
        // let result = await p
        // console.log(result)

        try{
            let result = await p
            console.log(result)
        }catch(e){
            console.log(e)
        }
    }

// await 必须放在 async 函数中，右侧表达式一般为 Promise 对象
// 返回Promise 成功值 失败了返回异常
main()