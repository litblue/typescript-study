// 属性的封装

(function (){
    class Person{

        private _name:string;

        constructor(name:string) {
            this._name = name;
        }

        // setter  getter 方法
        get name(): string {
            return this._name;
        }
        set name(value: string) {
            this._name = value;
        }


    }

    const person = new Person("牛牛");
    person.name = "猪八戒";

    console.log(person.name);

})();
