/**
 * @version v1.0
 * @ClassNmae: Mediator
 * @Description: desc
 * @Author: SYANNPE
 */
import Person from "./Person";

export default abstract class Mediator {
    public abstract constact(message: string, person: Person): void;

}