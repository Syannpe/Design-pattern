/**
 * @version v1.0
 * @ClassNmae: Phone
 * @Description: desc
 * @Author: SYANNPE
 */


export default class Phone {
    private cpu: string;
    private screen: string;
    private memory: string;
    private mainboard: string;

    static Builder = class {
        public _cpu: string;
        public _screen: string;
        public _memory: string;
        public _mainboard: string;

        public cpu(cpu: string): InstanceType<typeof Phone.Builder> {
            this._cpu = cpu;
            return this;
        }

        public screen(screen: string): InstanceType<typeof Phone.Builder> {
            this._screen = screen;
            return this;
        }

        public memory(memory: string): InstanceType<typeof Phone.Builder> {
            this._memory = memory;
            return this;
        }

        public mainboard(mainboard: string): InstanceType<typeof Phone.Builder> {
            this._mainboard = mainboard;
            return this;
        }

        // 使用构建者创建phone对象
        public build(): Phone {
            return new Phone(this);
        }
    }

    private constructor(builder: InstanceType<typeof Phone.Builder>) {
        this.cpu = builder._cpu;
        this.screen = builder._screen;
        this.memory = builder._memory;
        this.mainboard = builder._mainboard;
    }

}

