/**
 * @version v1.0
 * @ClassNmae: StudentAggregate
 * @Description: 抽象聚合角色类
 * @Author: SYANNPE
 */
import Student from "./Student";
import StudentIterator from "./StudentIterator";

export default interface StudentAggregate {
//     添加学生功能
    addStudent(student: Student): void;
//     删除学生功能
    removeStudent(student: Student): void;
//     获取迭代器功能
    getIterator(): StudentIterator;
}