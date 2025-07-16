/**
 * @version v1.0
 * @ClassNmae: StudentIterator
 * @Description: 抽象迭代器角色接口
 * @Author: SYANNPE
 */
import Student from "./Student";

export default interface StudentIterator {
//     判断是否还有元素
    hasNext(): boolean;

    //     获取下一个元素
    next(): Student;
}