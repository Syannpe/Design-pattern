/**
 * @version v1.0
 * @ClassNmae: BoxFactory
 * @Description: 工厂类：将该类设计为单例
 * @Author: SYANNPE
 */
import AbstractBox from "./AbstractBox";
import IBox from "./IBox";
import LBox from "./LBox";
import OBox from "./OBox";

export default class BoxFactory {
    private map: Map<string, AbstractBox>;

//     在构造方法中进行初始化操作
    private constructor() {
        this.map = new Map();
        this.map.set("I", new IBox());
        this.map.set("L", new LBox());
        this.map.set("O", new OBox());
    }

//     根据名称获取图形对象
    public getBox(name: string): AbstractBox {
        return this.map.get(name);
    }

    // 饿汉式单例模式
    private static instance: BoxFactory = new BoxFactory();

//     提供一个方法获取改工厂类对象
    public static getInstance(): BoxFactory {
        return BoxFactory.instance;
    }
}