/**
 * @version v1.0
 * @ClassNmae: Computer
 * @Description: 计算机类
 * @Author: SYANNPE
 */
import SDCard from "./SDCard";

export default class Computer {
//     从SD卡中读取数据
    public readSD(sdCard: SDCard): string {
        if (sdCard == null) {
            return "读取SD卡出错了";
        } else {
            return sdCard.readSD();
        }
    }
}