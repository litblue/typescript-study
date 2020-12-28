// 构造函数
var Dog = /** @class */ (function () {
    // 构造函数，  在对象创建时调用
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    Dog.prototype.bark = function () {
        console.log(this.name + "在汪汪叫");
    };
    ;
    return Dog;
}());
var dog = new Dog("旺财", 3);
var dog2 = new Dog("来宝", 2);
dog.bark();
dog2.bark();
