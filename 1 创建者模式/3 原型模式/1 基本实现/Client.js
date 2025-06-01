/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
import Realizetype from "./Realizetype";
class Client {
    static main(args) {
        const realizeType = new Realizetype();
        console.log(realizeType.clone());
    }
}
Client.main();
