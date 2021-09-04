const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("出错了")
    }, 1000);
})

p.catch(function(reason){
    console.warn(reason)
})