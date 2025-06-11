/**
 * @version v1.0
 * @ClassNmae: AviFile
 * @Description: Rmvb视频文件 具体实现化角色
 * @Author: SYANNPE
 */
import VideoFile from "./VideoFile";

export default class RmvbFile implements VideoFile{
    decode(fileName: string): void {
        console.log("Rmvb文件：" + fileName);
    }
}