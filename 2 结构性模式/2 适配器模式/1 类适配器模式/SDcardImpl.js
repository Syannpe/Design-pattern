export default class SDcardImpl {
    readSD() {
        return "SDCard read msg: hello world TFCard";
    }
    writeSD(message) {
        console.log("SDCard write msg: " + message);
    }
}
