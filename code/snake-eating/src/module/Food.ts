// 定义食物类

class Food{
    element: HTMLElement;

    constructor() {
        // 获取页面 food 元素
        this.element = document.getElementById("food")!;
    };

    // 获取食物X轴坐标
    get X(){
        return this.element.offsetLeft;
    };

    // 获取食物Y轴坐标
    get Y(){
        return this.element.offsetTop;
    };

    // 修改食物的位置
    change(){
        // 生成一个随机的位置
        // 食物的位置最小是0 最大是290
        // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10

        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    };
}


export default Food;
