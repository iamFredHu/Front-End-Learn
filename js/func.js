// call（）和apply()
function fun() {
    console.log(this);
}

var obj = {};
// fun(); //它是返回值 fun才是对象
fun(); // window
fun.call(obj); // obj
fun.apply(obj); // obj
// 两个方法都是一个效果，都会调用函数执行

// 调用call和reply时可以将一个对象指定为第一个参数
// 用来指定this 参数是谁，this就是谁

// 区别
// call方法可以将实参在对象之后依次传递 apply不行