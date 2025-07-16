import StudentIteratorImpl from "./StudentIteratorImpl";
export default class StudentAggregateImpl {
    list = [];
    addStudent(student) {
        this.list.push(student);
    }
    removeStudent(student) {
        this.list.splice(this.list.indexOf(student), 1);
    }
    getIterator() {
        return new StudentIteratorImpl(this.list);
    }
}
