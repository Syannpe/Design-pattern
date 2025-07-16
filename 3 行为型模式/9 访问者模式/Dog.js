export default class Dog {
    accept(person) {
        person.feed(this); //访问者给宠物狗喂食
        console.log("好好吃，汪汪汪");
    }
}
