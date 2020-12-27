// object 表示一个对象
let a:object;
a = {};

let b :{
    name:string,
    // 属性名后加 ? ，表示该属性可选
    age?:number
}
b = {name:"孙悟空"};

// [propName:string]:any 表示任意类型的属性
let c:{name:string, [propName:string]:any}
c = {name:"八戒", age:800};

/*
 * 设置函数结构的类型声明:
 *  语法：(形参:类型, 形参:类型...) => 返回值类型
 */
let d:(a:number, b:string) => boolean;
d = function (n1:number, n2:string): boolean{
    return true;
}

// 类型[]或者 Array<类型> 表示该类型数组
let e:string[];
let f:Array<number>
f = [1,3,4]


/*
 * 元组，元组就是固定长度的数组
 * 语法：[类型,类型]
 */
let g:[string, string];
g = ["a", "b"]


/*
 * enum 枚举
 */
enum Gender{
    Male,
    Female
}
let h: {name:string,gender:Gender};
h = {
    name:"悟空",
    gender:Gender.Male
};
console.log(h.gender === Gender.Male);

// &表示同时
let i:{name:string} & {age:number};
i = {name:"八戒", age:222};


//类型的别名
type myType = 1|2|3|4|5;
let j:myType;
let k:myType;
k=2;
// let j:1|2|3|4|5;
// let k:1|2|3|4|5;
