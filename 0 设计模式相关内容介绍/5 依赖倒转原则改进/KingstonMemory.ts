import {Memory} from "./Memory";

class KingstonMemory implements Memory{
    public save(): void {
        console.log("使用Kingston内存条")
    }
}

export {KingstonMemory}