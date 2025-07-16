/**
 * @version v1.0
 * @ClassNmae: AbstractExpression
 * @Description: 抽象表达式类
 * @Author: SYANNPE
 */
import Context from "./Context";

export default abstract class AbstractExpression {
    public abstract interpret(context: Context): number;

}