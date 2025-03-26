import {Computer} from "./Computer";
import {IntelCpu} from "./IntelCpu";
import {KingstonMemory} from "./KingstonMemory";
import {XIJieHardDisk} from "./XIJieHardDisk";

// 创建组件对象
const cpu: IntelCpu = new IntelCpu();
const memory: KingstonMemory = new KingstonMemory();
const hardDisk: XIJieHardDisk = new XIJieHardDisk();

// 创建Computer对象
const computer: Computer = new Computer();
computer.cpu = cpu;
computer.memory = memory;
computer.hardDisk = hardDisk;

// 运行计算机
computer.run();
