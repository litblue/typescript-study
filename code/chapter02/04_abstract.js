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
// 以abstract 开头的是抽象类
// 抽象类和其他类区别不大，只是不能用来创建对象
// 抽象类就是专门 用来被继承的类
//
// 抽象类中可以添加抽象方法
var Tree = /** @class */ (function () {
    function Tree(name) {
        this.name = name;
    }
    return Tree;
}());
var AppleTree = /** @class */ (function (_super) {
    __extends(AppleTree, _super);
    function AppleTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppleTree.prototype.fruit = function () {
        console.log("" + this.name);
    };
    return AppleTree;
}(Tree));
var tree = new AppleTree("苹果");
tree.fruit();
