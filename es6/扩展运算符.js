// ... 将数组转换为逗号分割的参数序列

// 声明一个数组
const str = ['str1', 'str2', 'str3']

// 声明一个函数
function test() {
    console.log(arguments)
}

test(str) //[Arguments] { '0': [ 'str1', 'str2', 'str3' ] }

test(...str) // [Arguments] { '0': 'str1', '1': 'str2', '2': 'str3' }

// 数组 分割 参数 序列

// rest 参数的声明放在了函数声明的形参位置 ...放在函数调用的时候


// 数组的合并
const igClub = ['The Shy', 'Ning', 'Rookie', 'Jackeylove', 'Baolan']

const fpxClub = ['GimGon', 'Tian', 'Doinb', 'lwx', 'Crisp']

const S8S9 = [...igClub, ...fpxClub]

console.log(S8S9) // ['The Shy', 'Ning','Rookie',  'Jackeylove','Baolan',  'GimGon','Tian',    'Doinb','lwx',     'Crisp']

// 数组的克隆
const strs = [1, 2, 3]
const teststr = [...strs]
console.log(teststr) // [ 1, 2, 3 ]

// 伪数组->真数组 (DOM中)