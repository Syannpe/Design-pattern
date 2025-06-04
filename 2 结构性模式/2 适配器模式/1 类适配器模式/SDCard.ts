/**
 * @version v1.0
 * @ClassNmae: SDCard
 * @Description: 目标接口
 * @Author: SYANNPE
 */

export default interface SDCard {
    // 从SD卡中读取数据
    readSD(): string;

    // 往SD卡中写数据
    writeSD(message: string): void;
}