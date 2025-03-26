import { AbstractSkin } from "./AbstractSkin.js";
class DefaultSkin extends AbstractSkin {
    display() {
        console.log("默认皮肤");
    }
}
export { DefaultSkin };
