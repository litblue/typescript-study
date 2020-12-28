// 泛型
// 在定义函数或类时，如果遇到类型不明确时就可以使用

function fn<T>(value:T):T{
    return value;
}

// 直接调用具有泛型的函数
// 不指定泛型，ts可以自动对 类型进行推断
fn(10);

// 指定泛型
fn<string>('test');

interface Inter{
    length:number;
}

function fn2<T extends Inter>(a:T):number{
    return a.length;
}


class MyClass<T>{
    name:T;
    constructor(name:T){
        this.name = name;
    }
}
