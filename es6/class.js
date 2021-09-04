// ES6引入Class这个概念，作为对象的模板 （语法糖）

class Phone{
    // 构造方法 名字固定
    constructor(brand,price){
        this.brand = brand
        this.price = price
    }

    call(){
        console.log('555')
    }
}

// 实例化对象

let Xiaomi = new Phone("小米",4999)
console.log(Xiaomi)
Xiaomi.call()