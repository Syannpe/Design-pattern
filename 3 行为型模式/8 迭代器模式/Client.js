import StudentAggregateImpl from "./StudentAggregateImpl";
import Student from "./Student";
export default class Client {
    static main() {
        const studentAggregate = new StudentAggregateImpl();
        studentAggregate.addStudent(new Student("小明", "001"));
        studentAggregate.addStudent(new Student("小张", "002"));
        studentAggregate.addStudent(new Student("小王", "003"));
        studentAggregate.addStudent(new Student("小李", "004"));
        studentAggregate.addStudent(new Student("小赵", "005"));
        const iterator = studentAggregate.getIterator();
        while (iterator.hasNext()) {
            const student = iterator.next();
            console.log(student.toString());
        }
    }
}
Client.main();
