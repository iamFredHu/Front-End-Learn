// rest 替代 arguments 获取函数的实参

// function date(){
//     console.log(arguments) // [Arguments] { '0': 'str1', '1': 'str2', '2': 'str3' }
// }

// date('str1','str2','str3')

function date(a, ...args) {
    console.log(args) // [ 'str2', 'str3' ]  a 对应 str1
}

date('str1', 'str2', 'str3')
// arguments 对象 args 数组

// rest参数必须放在所有参数的最后