import TFCardImpl from "./TFCardImpl";
export default class SDAdapter extends TFCardImpl {
    readSD() {
        console.log("adapter read tf card");
        return this.readTF();
    }
    writeSD(message) {
        this.writeTF(message);
    }
}
