/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import Variable from "./Variable";
import Minus from "./Minus";
import Context from "./Context";
import Plus from "./Plus";
import AbstractExpression from "./AbstractExpression";

export default class Client {
    static main(args: string[]): void {
        //     创建一个上下文对象
        let context: Context = new Context();
        //     创建一个变量对象
        let a: Variable = new Variable("a");
        let b: Variable = new Variable("b");
        let c: Variable = new Variable("c");
        let d: Variable = new Variable("d");

        context.assign(a, 1);
        context.assign(b, 2);
        context.assign(c, 3);
        context.assign(d, 4);

        const expression: AbstractExpression = new Minus(a, new Plus(new Minus(b, c), d));
        const res = expression.interpret(context);

        console.log(expression.toString() + "=" + res);

    }
}

Client.main([])