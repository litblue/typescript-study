// 使用 class 关键字来定义一个类

/*
 * 对象中主要包含了两个部分：
 *  属性;
 *  方法
 */
enum Gender{
 MALE,
 FEMALE
}

class Person{

 /*
  * 直接定义的属性是实例属性，需要通过对象的实例去访问：
  * const person = new Person();
  * person.name;
  *
  * 使用static 开头的属性是静态属性(类属性)，可以直接访问:
  * Person.age;
  */

 // 定义实例属性
 name:string = 'litblue';

 // 在属性前使用static关键字可以定义类属性（静态属性）
 static age:number = 22;

 // readonly 表示只读属性
 static readonly gender:Gender.MALE;

 // 定义方法
 // 如果方法以 static开头，则是类方法，可以直接通过类进行调用
 sayHello():void{
  console.log("hello,大家好");
 }
}

const person = new Person();

console.log(person.name);
console.log(Person.age);

person.sayHello();
