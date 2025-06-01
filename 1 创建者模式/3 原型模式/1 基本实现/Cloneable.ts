/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */

export default class Cloneable<T> {

    public clone() :T {
        return structuredClone(this as unknown as T);
    }
}