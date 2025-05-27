class Computer {
    get hardDisk() {
        return this._hardDisk;
    }
    set hardDisk(value) {
        this._hardDisk = value;
    }
    get memory() {
        return this._memory;
    }
    set memory(value) {
        this._memory = value;
    }
    get cpu() {
        return this._cpu;
    }
    set cpu(value) {
        this._cpu = value;
    }
    run() {
        console.log("电脑开始运行");
        const data = this.hardDisk.read();
        console.log("从硬盘中读取数据：" + data);
        this.cpu.run();
        this.memory.save();
    }
}
export { Computer };
