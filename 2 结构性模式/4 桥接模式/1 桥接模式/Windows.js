/**
 * @version v1.0
 * @ClassNmae: Windows
 * @Description: 扩展抽象化角色 Windows操作系统
 * @Author: SYANNPE
 */
import OpreatingSystem from "./OpreatingSystem";
export default class Windows extends OpreatingSystem {
    play(fileName) {
        this.videoFile.decode(fileName);
    }
    constructor(videoFile) {
        super(videoFile);
    }
}
