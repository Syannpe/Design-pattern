/**
 * @version v1.0
 * @ClassNmae: StudentIteraterImpl
 * @Description: desc
 * @Author: SYANNPE
 */
import Student from "./Student";
import StudentIterator from "./StudentIterator";

export default class StudentIteratorImpl implements StudentIterator {
    private list: Student[];
    private position: number = 0;       //用于记录遍历时的位置

    hasNext(): boolean {
        return this.position < this.list.length;
    }

    next(): Student {
        return this.list[this.position++];
    }

    constructor(list: Student[]) {
        this.list = list;
    }

}