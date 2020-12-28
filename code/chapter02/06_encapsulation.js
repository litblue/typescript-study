// 属性的封装
(function () {
    class Person {
        constructor(name) {
            this._name = name;
        }
        // setter  getter 方法
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
    }
    const person = new Person("牛牛");
    person.name = "猪八戒";
    console.log(person.name);
})();
