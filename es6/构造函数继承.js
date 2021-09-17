// ES6引入Class这个概念，作为对象的模板 （语法糖）

class Phone{
    // 构造方法 名字固定
    constructor(brand,price){
        this.brand = brand
        this.price = price
    }

    call(){
        console.log('我可以打电话')
    }
}

class SmartPhone extends Phone {
    constructor(brand,price,color,size){
        super(brand,price)
        this.color = color
        this.siez = size
    }

    photo(){
        console.log("拍照")
    }
}

const Xiaomi = new SmartPhone("小米",4999,'black','5.7')

console.log(Xiaomi)

Xiaomi.photo()
Xiaomi.call()