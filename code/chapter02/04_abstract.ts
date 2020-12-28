// 以abstract 开头的是抽象类
// 抽象类和其他类区别不大，只是不能用来创建对象
// 抽象类就是专门 用来被继承的类
//
// 抽象类中可以添加抽象方法
abstract class Tree {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // 抽象方法使用 abstract 开头，没有方法体
    // 抽象方法只能定义在抽象类中，且子类必须对 抽象方法进行重写
    abstract fruit(): void;
}


class AppleTree extends Tree{
    fruit():void{
        console.log(`${this.name}`);
    }
}

const tree = new AppleTree("苹果");
tree.fruit();


