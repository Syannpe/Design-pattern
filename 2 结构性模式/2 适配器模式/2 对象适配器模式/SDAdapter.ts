/**
 * @version v1.0
 * @ClassNmae: SDAdapter
 * @Description: desc
 * @Author: SYANNPE
 */
import SDCard from "./SDCard";
import TFCard from "./TFCard";
import TFCardImpl from "./TFCardImpl";

export default class SDAdapter implements SDCard {
    // 声明适配者类
    private tfCard: TFCard;

    constructor(tfCard: TFCard) {
        this.tfCard = tfCard;
    }

    readSD(): string {
        console.log("adapter read tf card");
        return this.tfCard.readTF();
    }

    writeSD(message: string): void {
        this.tfCard.writeTF(message);
    }
}