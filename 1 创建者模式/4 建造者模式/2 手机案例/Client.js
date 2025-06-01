/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import Phone from "./Phone";
export default class Client {
    static main(args) {
        // 通过构建这对象创建手机对象
        const phone = new Phone.Builder()
            .cpu("intel")
            .screen("sumsung")
            .memory("kingston")
            .mainboard("asus")
            .build();
        console.log(phone);
    }
}
Client.main([]);
