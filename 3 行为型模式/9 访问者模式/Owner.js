import Cat from "./Cat";
import Dog from "./Dog";
export default class Owner {
    feed(cat) {
        if (cat instanceof Cat) {
            console.log("主人喂食猫");
        }
        else if (cat instanceof Dog) {
            console.log("主人喂食狗");
        }
    }
}
