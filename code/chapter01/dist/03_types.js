// 可以直接使用字面量进行类型声明
let a;
a = 10;
// a=11; // 报错
// '|' 表示或
let b;
b = "male";
b = "female";
// b= "unknown"  // 报错
// any 表示任意类型，如果不指定，ts解析会自动判断变量类型为any(隐式any)
// 使用ts时不建议使用
let c = 10;
c = "baba";
// unknown 表示未知类型的值
let d;
d = 10;
d = "hello";
// unknown 实际上就是一个类型安全的any,unknown类型的变量不能直接赋值给其他变量
// a = c;  // 不报错
// a = d;  // 报错
let e = "types";
// 类型断言,可以告诉解析器变量的实际类型
// 一下两种写法，作用一样
e = d;
e = d;
// void 表示空，以函数为例，就表示没有返回值的函数，可以return null; 或者 return;
function voidType() {
    // return "string";  //报错
    console.log("voidType");
}
// never表示永远不会返回结果，哪怕是null;
// 一般用来报错
function neverType() {
    throw new Error("程序报错");
}
