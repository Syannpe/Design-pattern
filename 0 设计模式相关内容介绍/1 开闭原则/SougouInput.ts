import {AbstractSkin} from "./AbstractSkin.js";

class SougouInput {
    private skin: AbstractSkin;

    public setSkin(skin: AbstractSkin) {
        this.skin = skin;
    }

    display(): void {
        this.skin.display();
    }
}

export {SougouInput}