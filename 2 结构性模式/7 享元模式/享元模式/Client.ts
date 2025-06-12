/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import BoxFactory from "./BoxFactory";

export default class Client {
    public static main(args: string[]): void {
        let boxFactory = BoxFactory.getInstance();
        let box = boxFactory.getBox("I");
        box.display("灰色");


        let box2 = boxFactory.getBox("L");
        box2.display("绿色");

        let box3 = boxFactory.getBox("O");
        box3.display("灰色");

        let box4 = boxFactory.getBox("O");
        box4.display("红色");

        console.log("两次获取到的O图形对象是否是同一个对象：" + (box3 === box4))
    }
}

Client.main([])