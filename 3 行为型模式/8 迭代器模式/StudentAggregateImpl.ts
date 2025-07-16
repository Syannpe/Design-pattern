/**
 * @version v1.0
 * @ClassNmae: StudentAggregateImpl
 * @Description: desc
 * @Author: SYANNPE
 */
import Student from "./Student";
import StudentAggregate from "./StudentAggregate";
import StudentIterator from "./StudentIterator";
import StudentIteratorImpl from "./StudentIteratorImpl";

export default class StudentAggregateImpl implements StudentAggregate {
    private list: Student[] = [];

    addStudent(student: Student): void {
        this.list.push(student);
    }

    removeStudent(student: Student): void {
        this.list.splice(this.list.indexOf(student), 1);
    }

    getIterator(): StudentIterator {
        return new StudentIteratorImpl(this.list);
    }

}