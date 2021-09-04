let m = new Map()

// 添加元素
m.set('name','Fred')

console.log(m)

let key = {school:'HIT'}

m.set(key,['HRB','WH','SZ'])

console.log(m)


console.log(m.size)


m.delete('name')

console.log(m.get(key))

m.clear()

for(let v of m){
    console.log(v)
}

// 升级版的Object Key可以是对象了现在