export default class SDAdapter {
    // 声明适配者类
    tfCard;
    constructor(tfCard) {
        this.tfCard = tfCard;
    }
    readSD() {
        console.log("adapter read tf card");
        return this.tfCard.readTF();
    }
    writeSD(message) {
        this.tfCard.writeTF(message);
    }
}
