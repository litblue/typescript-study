// object 表示一个对象
let a;
a = {};
let b;
b = { name: "孙悟空" };
// [propName:string]:any 表示任意类型的属性
let c;
c = { name: "八戒", age: 800 };
/*
 * 设置函数结构的类型声明:
 *  语法：(形参:类型, 形参:类型...) => 返回值类型
 */
let d;
d = function (n1, n2) {
    return true;
};
// 类型[]或者 Array<类型> 表示该类型数组
let e;
let f;
f = [1, 3, 4];
/*
 * 元组，元组就是固定长度的数组
 * 语法：[类型,类型]
 */
let g;
g = ["a", "b"];
/*
 * enum 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let h;
h = {
    name: "悟空",
    gender: Gender.Male
};
console.log(h.gender === Gender.Male);
// &表示同时
let i;
i = { name: "八戒", age: 222 };
let j;
let k;
k = 2;
// let j:1|2|3|4|5;
// let k:1|2|3|4|5;
