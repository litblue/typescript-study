// 接口可以在定义类的时候去限制类的结构
// 接口中所有属性都不能有实际的值
interface Student{
    study():void;
}

class StudentImpl implements Student{
    study(): void {
        console.log("好好学习");
    }
}

const student = new StudentImpl();
student.study();
