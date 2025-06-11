/**
 * @version v1.0
 * @ClassNmae: Mac
 * @Description: Mac操作系统 属于扩展抽象化角色
 * @Author: SYANNPE
 */
import OpreatingSystem from "./OpreatingSystem";
import VideoFile from "./VideoFile";

export default class Mac extends OpreatingSystem {
    public play(fileName: string): void {
        this.videoFile.decode(fileName);
    }

    constructor(videoFile: VideoFile) {
        super(videoFile);
    }

}