/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
import Realizetype from "./Realizetype";

class Client {
    public static main(args?: any) {
        const realizeType = new Realizetype();
        console.log(realizeType.clone());
    }
}

Client.main();