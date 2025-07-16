/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import HouseOwner from "./HouseOwner";
import MediatorStructure from "./MediatorStructure";
import Tenant from "./Tenant";

export default class Client {
    public static main(){
        let mediator = new MediatorStructure();
    //     创建租房者对象
        const tenant = new Tenant("张三", mediator);
        const houseOwner = new HouseOwner("李四", mediator);

    //     终结者要知道具体的房住合租房者
        mediator.tenant = tenant;
        mediator.houseOwner = houseOwner;

        tenant.constact("我要租房");
        houseOwner.constact("我要出租");
    }
}

Client.main();