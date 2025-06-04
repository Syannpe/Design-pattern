/**
 * @version v1.0
 * @ClassNmae: SDcardImpl
 * @Description: desc
 * @Author: SYANNPE
 */
import SDCard from "./SDCard";

export default class SDcardImpl implements SDCard {
    readSD(): string {
        return "SDCard read msg: hello world TFCard";
    }
    writeSD(message: string): void {
        console.log("SDCard write msg: " + message)
    }
}