import TrainStation from "./TrainStation";
export default class ProxyPoint {
    // 声明火车站类对象
    trainStation = new TrainStation();
    sell() {
        console.log("代售点收取一些服务费用");
        this.trainStation.sell();
    }
}
