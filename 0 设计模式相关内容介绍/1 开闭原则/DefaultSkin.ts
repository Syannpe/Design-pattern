import {AbstractSkin} from "./AbstractSkin.js";

class DefaultSkin extends AbstractSkin {
    public display(): void {
        console.log("默认皮肤")
    }
}

export {DefaultSkin}