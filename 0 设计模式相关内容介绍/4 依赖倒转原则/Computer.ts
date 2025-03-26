import {XIJieHardDisk} from "./XIJieHardDisk";
import {KingstonMemory} from "./KingstonMemory";
import {IntelCpu} from "./IntelCpu";

class Computer {
    private _hardDisk: XIJieHardDisk;
    private _memory: KingstonMemory;
    private _cpu: IntelCpu;

    get hardDisk(): XIJieHardDisk {
        return this._hardDisk;
    }

    set hardDisk(value: XIJieHardDisk) {
        this._hardDisk = value;
    }

    get memory(): KingstonMemory {
        return this._memory;
    }

    set memory(value: KingstonMemory) {
        this._memory = value;
    }

    get cpu(): IntelCpu {
        return this._cpu;
    }

    set cpu(value: IntelCpu) {
        this._cpu = value;
    }

    public run(): void {
        console.log("电脑开始运行");
        const data: string = this.hardDisk.read();
        console.log("从硬盘中读取数据：" + data)
        this.cpu.run();
        this.memory.save();
    }
}

export {Computer}