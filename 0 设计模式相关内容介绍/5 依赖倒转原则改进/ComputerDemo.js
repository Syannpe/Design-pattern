import { Computer } from "./Computer";
import { IntelCpu } from "./IntelCpu";
import { KingstonMemory } from "./KingstonMemory";
import { XIJieHardDisk } from "./XIJieHardDisk";
// 创建组件对象
const cpu = new IntelCpu();
const memory = new KingstonMemory();
const hardDisk = new XIJieHardDisk();
// 创建Computer对象
const computer = new Computer();
computer.cpu = cpu;
computer.memory = memory;
computer.hardDisk = hardDisk;
// 运行计算机
computer.run();
