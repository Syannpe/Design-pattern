/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: Syannpe
 */
import Director from "./Director";
import MobileBuilder from "./MobileBuilder";
export default class Client {
    static main(args) {
        const mobileBuilder = new MobileBuilder();
        const director = new Director(mobileBuilder);
        const res = director.construct();
        console.log(res);
    }
}
Client.main([]);
