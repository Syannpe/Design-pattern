/**
 * @version v1.0
 * @ClassNmae: Windows
 * @Description: 扩展抽象化角色 Windows操作系统
 * @Author: SYANNPE
 */
import OpreatingSystem from "./OpreatingSystem";
import VideoFile from "./VideoFile";

export default class Windows extends OpreatingSystem {
    public play(fileName: string): void {
        this.videoFile.decode(fileName);
    }

    constructor(videoFile: VideoFile) {
        super(videoFile);
    }
}