/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import Mac from "./Mac";
import AviFile from "./AviFile";

export default class Client {
    public static main(args: string[]): void {
        //     创建mac系统对象
        const system = new Mac(new AviFile());

        // 使用操作系统播放视频文件
        system.play("test.avi");
    }
}

Client.main([])