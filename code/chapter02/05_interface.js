var StudentImpl = /** @class */ (function () {
    function StudentImpl() {
    }
    StudentImpl.prototype.study = function () {
        console.log("好好学习");
    };
    return StudentImpl;
}());
var student = new StudentImpl();
student.study();
