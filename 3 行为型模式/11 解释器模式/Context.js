export default class Context {
    //     定义一个map集合用于存储变量和对应的值
    map = new Map();
    //     添加变量的功能
    assign(variable, value) {
        this.map.set(variable, value);
    }
    // 根据变量获取对应的值
    getValue(variable) {
        return this.map.get(variable);
    }
}
