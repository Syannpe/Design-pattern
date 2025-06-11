/**
 * @version v1.0
 * @ClassNmae: Mac
 * @Description: Mac操作系统 属于扩展抽象化角色
 * @Author: SYANNPE
 */
import OpreatingSystem from "./OpreatingSystem";
export default class Mac extends OpreatingSystem {
    play(fileName) {
        this.videoFile.decode(fileName);
    }
    constructor(videoFile) {
        super(videoFile);
    }
}
