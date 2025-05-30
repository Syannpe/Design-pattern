/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
export default class Cloneable {
    clone() {
        return structuredClone(this);
    }
}
