export default class Cat {
    accept(person) {
        person.feed(this); //访问者给宠物猫喂食
        console.log("好好吃，喵喵喵");
    }
}
