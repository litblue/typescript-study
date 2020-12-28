// 继承

class Animal{
    name:string;

    constructor(name:string) {
        this.name = name;
    }

    bark():void{
        console.log(`${this.name} ~ 叫`);
    }
}

class Tiger extends Animal{
    age:number;

    // 如果在子类中写了构造函数，在子类中必须对父类的构造函数进行调用
    constructor(name:string, age:number) {
        super(name);
        this.age = age;
    }

    bark():void{
        /*
         * super 表示当前类的父类
         */
        // 动物叫
        super.bark();
        // 虎啸
        console.log("虎啸");
    }

    run():void{
        console.log(`${this.name} is running~`);
    }
}

const animal = new Animal("帅逼松");
const tiger = new Tiger("老虎", 8);
console.log(tiger);
tiger.run();
tiger.bark();

animal.bark();

