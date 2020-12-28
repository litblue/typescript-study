// 构造函数

class Dog{
    name:string;
    age:number;

    bark():void{
        console.log(this.name + "在汪汪叫");
    };

    // 构造函数，  在对象创建时调用
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}


const  dog = new Dog("旺财", 3);
const  dog2 = new Dog("来宝", 2);

dog.bark();
dog2.bark();
