import IBox from "./IBox";
import LBox from "./LBox";
import OBox from "./OBox";
export default class BoxFactory {
    map;
    //     在构造方法中进行初始化操作
    constructor() {
        this.map = new Map();
        this.map.set("I", new IBox());
        this.map.set("L", new LBox());
        this.map.set("O", new OBox());
    }
    //     根据名称获取图形对象
    getBox(name) {
        return this.map.get(name);
    }
    // 饿汉式单例模式
    static instance = new BoxFactory();
    //     提供一个方法获取改工厂类对象
    static getInstance() {
        return BoxFactory.instance;
    }
}
