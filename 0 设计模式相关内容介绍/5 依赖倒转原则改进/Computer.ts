import {XIJieHardDisk} from "./XIJieHardDisk";
import {KingstonMemory} from "./KingstonMemory";
import {IntelCpu} from "./IntelCpu";
import {HardDisk} from "./HardDisk";
import {Memory} from "./Memory";
import {CPU} from "./CPU";

class Computer {
    private _hardDisk: HardDisk;
    private _memory: Memory;
    private _cpu: CPU;

    get hardDisk(): HardDisk {
        return this._hardDisk;
    }

    set hardDisk(value: HardDisk) {
        this._hardDisk = value;
    }

    get memory(): Memory {
        return this._memory;
    }

    set memory(value: Memory) {
        this._memory = value;
    }

    get cpu(): CPU {
        return this._cpu;
    }

    set cpu(value: CPU) {
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