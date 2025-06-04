/**
 * @version v1.0
 * @ClassNmae: SDAdapter
 * @Description: desc
 * @Author: SYANNPE
 */
import SDCard from "./SDCard";
import TFCard from "./TFCard";
import TFCardImpl from "./TFCardImpl";

export default class SDAdapter extends TFCardImpl implements SDCard {
    readSD(): string {
        console.log("adapter read tf card");
        return this.readTF();
    }

    writeSD(message: string): void {
        this.writeTF(message);
    }
}