/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import Computer from "./Computer";
import SDAdapter from "./SDAdapter";
import TFCardImpl from "./TFCardImpl";
import SDcardImpl from "./SDcardImpl";

export default class Client {
    public static main(args: string[]): void {
        // 创建计算机对象
        const computer = new Computer();

        // 读取SD卡中的数据
        const msg1 = computer.readSD(new SDcardImpl());
        console.log(msg1)
        console.log("-".repeat(20));

        // 读取TF卡中的数据
        const msg2 = computer.readSD(new SDAdapter(new TFCardImpl()));
        console.log(msg2)
    }
}

Client.main([]);