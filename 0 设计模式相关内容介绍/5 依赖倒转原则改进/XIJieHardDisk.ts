import {HardDisk} from "./HardDisk";

class XIJieHardDisk implements HardDisk{
    // 保存数据
    public save(data: string): void {
        console.log("希捷硬盘 保存数据：" + data);
    }

    // 读取数据
    public read(): string {
        console.log("希捷硬盘 读取数据");
        return "数据";
    }
}

export {XIJieHardDisk}