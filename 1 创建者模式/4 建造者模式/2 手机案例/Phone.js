/**
 * @version v1.0
 * @ClassNmae: Phone
 * @Description: desc
 * @Author: SYANNPE
 */
export default class Phone {
    cpu;
    screen;
    memory;
    mainboard;
    static Builder = class {
        _cpu;
        _screen;
        _memory;
        _mainboard;
        cpu(cpu) {
            this._cpu = cpu;
            return this;
        }
        screen(screen) {
            this._screen = screen;
            return this;
        }
        memory(memory) {
            this._memory = memory;
            return this;
        }
        mainboard(mainboard) {
            this._mainboard = mainboard;
            return this;
        }
        // 使用构建者创建phone对象
        build() {
            return new Phone(this);
        }
    };
    constructor(builder) {
        this.cpu = builder._cpu;
        this.screen = builder._screen;
        this.memory = builder._memory;
        this.mainboard = builder._mainboard;
    }
}
