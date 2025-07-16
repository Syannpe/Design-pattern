/**
 * @version v1.0
 * @ClassNmae: Observer
 * @Description: 抽象观察者类
 * @Author: SYANNPE
 */

export default interface Observer {
    update(message: string): void;
}