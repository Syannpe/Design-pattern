/**
 * @version v1.0
 * @ClassNmae: TFCardImpl
 * @Description: 适配者类
 * @Author: SYANNPE
 */
import TFCard from "./TFCard";

export default class TFCardImpl implements TFCard{
    readTF(): string {
        return "TFCard read msg: hello world TFCard";
    }
    writeTF(message: string): void {
        console.log("TFCard write msg: " + message)
    }
}