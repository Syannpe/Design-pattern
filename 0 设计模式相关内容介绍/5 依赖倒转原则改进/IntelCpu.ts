import {CPU} from "./CPU";

class IntelCpu implements CPU{
    public run():void{
        console.log("使用Intel处理器")
    }
}

export {IntelCpu}