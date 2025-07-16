/**
 * @version v1.0
 * @ClassNmae: Person
 * @Description: 抽象同事类
 * @Author: SYANNPE
 */
import Mediator from "./Mediator";

export default abstract class Person {
    protected name: string;
    protected mediator: Mediator;

    public constructor(name: string, mediator: Mediator) {
        this.name = name;
        this.mediator = mediator;
    }
}