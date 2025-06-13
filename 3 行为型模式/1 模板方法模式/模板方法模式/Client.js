/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import ConcreteClass_BaoCai from "./ConcreteClass_BaoCai";
export default class Client {
    static main(args) {
        // 炒包菜
        const baocai = new ConcreteClass_BaoCai();
        // 调用炒菜功能
        baocai.cookProcess();
    }
}
Client.main([]);
