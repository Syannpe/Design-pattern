/**
 * @version v1.0
 * @ClassNmae: TFCard
 * @Description: 适配者类的接口
 * @Author: SYANNPE
 */

export default interface TFCard {
    // 从TF卡中读取数据
    readTF(): string;

    // 往TF卡中写入数据
    writeTF(message: string): void;
}