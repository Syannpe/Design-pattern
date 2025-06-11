/**
 * @version v1.0
 * @ClassNmae: AviFile
 * @Description: Avi视频文件 具体实现化角色
 * @Author: SYANNPE
 */
import VideoFile from "./VideoFile";

export default class AviFile implements VideoFile{
    decode(fileName: string): void {
        console.log("avi文件：" + fileName);
    }
}