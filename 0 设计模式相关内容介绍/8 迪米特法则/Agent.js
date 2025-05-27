class Agent {
    get star() {
        return this._star;
    }
    get fans() {
        return this._fans;
    }
    get company() {
        return this._company;
    }
    set star(value) {
        this._star = value;
    }
    set fans(value) {
        this._fans = value;
    }
    set company(value) {
        this._company = value;
    }
    // 和粉丝见面的方法
    meeting() {
        console.log(this.star.name + "和粉丝" + this.fans.name + "见面");
    }
    // 和媒体公司洽谈的方法
    business() {
        console.log(this.star.name + "和" + this.company.name + "洽谈");
    }
}
export default Agent;
