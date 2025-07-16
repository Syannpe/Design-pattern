export default class StudentIteratorImpl {
    list;
    position = 0; //用于记录遍历时的位置
    hasNext() {
        return this.position < this.list.length;
    }
    next() {
        return this.list[this.position++];
    }
    constructor(list) {
        this.list = list;
    }
}
