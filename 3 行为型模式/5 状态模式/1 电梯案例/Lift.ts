/**
 * @version v1.0
 * @ClassNmae: Lift
 * @Description: 电梯类（ILift的子实现类）
 * @Author: SYANNPE
 */
import ILift from "./ILift";

export default class Lift extends ILift {
    // 声明一个记录当前电梯状态的变量
    private state: number;

    setState(state: number): void {
        this.state = state;
    }

    open(): void {
        switch (this.state) {
            case this.CLOSING_STATE:
                console.log("电梯门开启");
                this.setState(this.OPENING_STATE);
                break;
            case this.OPENING_STATE:
                break;
            case this.RUNNING_STATE:
                break;
            case this.STOPPING_STATE:
                console.log("电梯已停止");
                this.setState(this.OPENING_STATE);
                break;
        }
    }

    close(): void {
        switch (this.state) {
            case this.CLOSING_STATE:
                break;
            case this.OPENING_STATE:
                console.log("电梯关门了。");
                this.setState(this.CLOSING_STATE)
                break;
            case this.RUNNING_STATE:
                break;
            case this.STOPPING_STATE:
                break;
        }
    }

    run(): void {
        switch (this.state) {
            case this.CLOSING_STATE:
                console.log("电梯开始运行了。")
                this.setState(this.RUNNING_STATE)
                break;
            case this.OPENING_STATE:
                break;
            case this.RUNNING_STATE:
                break;
            case this.STOPPING_STATE:
                console.log("电梯开始运行了")
                this.setState(this.RUNNING_STATE)
                break;
        }
    }

    stop(): void {
        switch (this.state) {
            case this.CLOSING_STATE:
                console.log("电梯已停止。");
                this.setState(this.STOPPING_STATE)
                break;
            case this.OPENING_STATE:
                break;
            case this.RUNNING_STATE:
                console.log("电梯已停止。");
                this.setState(this.STOPPING_STATE)
                break;
            case this.STOPPING_STATE:
                break;
        }
    }
}