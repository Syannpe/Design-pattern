/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
import Citation from "./Citation";
class Client {
    static main(args) {
        const citation = new Citation("张三");
        const cloned = citation.clone();
        cloned.name = "李四";
        citation.show();
        cloned.show();
    }
}
Client.main();
