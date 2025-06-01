/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
import Citation from "./Citation";
import Student from "./Student";

class Client {
    public static main(args?: any) {
        const citation = new Citation();

        const student = new Student();
        student.name = "张三";
        citation.student = student;

        const cloned = citation.clone();
        cloned.student.name = "李四";

        citation.show();
        cloned.show();
    }
}

Client.main();