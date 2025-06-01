/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
export default class Cloneable {
    clone() {
        const proto = Object.getPrototypeOf(this);
        const copy = Object.create(proto);
        // 2. 将 this 上可枚举的属性（自身属性）浅拷贝到 copy
        Object.assign(copy, this);
        return copy;
    }
}
