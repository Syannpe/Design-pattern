import Cat from "./Cat";
import Dog from "./Dog";
export default class Someone {
    feed(cat) {
        if (cat instanceof Cat) {
            console.log("其他人喂食猫");
        }
        else if (cat instanceof Dog) {
            console.log("其他人喂食狗");
        }
    }
}
