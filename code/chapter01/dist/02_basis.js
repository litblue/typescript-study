// a的类型设置成了number，在以后的使用过程中，a的值只能是数字
let a;
a = 10;
// 这么写就会报错
// a='hello'
// 如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型检测
let flag = true;
// flag = 0;  // 报错
function append(fistName, lastName) {
    return fistName + "_" + lastName;
}
console.log(append("litblue", "handy"));
