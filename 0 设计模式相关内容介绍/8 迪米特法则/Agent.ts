/**
 * @version v1.0
 * @ClassNmae: Agent
 * @Description: 经济人类
 * @Author: Syannpe
 */
import Star from "./Star";
import Fans from "./Fans";
import Company from "./Company";

class Agent {
    private _star: Star;
    private _fans: Fans;
    private _company: Company;


    get star(): Star {
        return this._star;
    }

    get fans(): Fans {
        return this._fans;
    }

    get company(): Company {
        return this._company;
    }

    set star(value: Star) {
        this._star = value;
    }

    set fans(value: Fans) {
        this._fans = value;
    }

    set company(value: Company) {
        this._company = value;
    }

    // 和粉丝见面的方法
    public meeting(): void {
        console.log(this.star.name + "和粉丝" + this.fans.name + "见面");
    }

    // 和媒体公司洽谈的方法
    public business(): void {
        console.log(this.star.name + "和" + this.company.name + "洽谈");
    }
}

export default Agent;