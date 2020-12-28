// 继承
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.bark = function () {
        console.log(this.name + " ~ \u53EB");
    };
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    // 如果在子类中写了构造函数，在子类中必须对父类的构造函数进行调用
    function Tiger(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    Tiger.prototype.bark = function () {
        /*
         * super 表示当前类的父类
         */
        // 动物叫
        _super.prototype.bark.call(this);
        // 虎啸
        console.log("虎啸");
    };
    Tiger.prototype.run = function () {
        console.log(this.name + " is running~");
    };
    return Tiger;
}(Animal));
var animal = new Animal("帅逼松");
var tiger = new Tiger("老虎", 8);
console.log(tiger);
tiger.run();
tiger.bark();
animal.bark();
