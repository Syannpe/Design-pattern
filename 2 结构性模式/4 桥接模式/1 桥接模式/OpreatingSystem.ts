/**
 * @version v1.0
 * @ClassNmae: OpreatingSystem
 * @Description: 抽象的操作系统类 抽象化角色
 * @Author: SYANNPE
 */
import VideoFile from "./VideoFile";

export default abstract class OpreatingSystem {
//     声明videoFile变量
    protected videoFile: VideoFile;

    public constructor(videoFile: VideoFile) {
        this.videoFile = videoFile;
    }

    public abstract play(fileName: string): void;
}