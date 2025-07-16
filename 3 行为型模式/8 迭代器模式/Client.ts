/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import StudentAggregate from "./StudentAggregate";
import StudentAggregateImpl from "./StudentAggregateImpl";
import Student from "./Student";
import StudentIterator from "./StudentIterator";

export default class Client {
    public static main() {
        const studentAggregate: StudentAggregate = new StudentAggregateImpl();
        studentAggregate.addStudent(new Student("小明", "001"));
        studentAggregate.addStudent(new Student("小张", "002"));
        studentAggregate.addStudent(new Student("小王", "003"));
        studentAggregate.addStudent(new Student("小李", "004"));
        studentAggregate.addStudent(new Student("小赵", "005"));

        const iterator: StudentIterator = studentAggregate.getIterator();
        while (iterator.hasNext()) {
            const student: Student = iterator.next();
            console.log(student.toString());
        }
    }
}

Client.main();