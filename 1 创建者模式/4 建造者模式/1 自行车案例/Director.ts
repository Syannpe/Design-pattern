/**
 * @version v1.0
 * @ClassNmae: Director
 * @Description: desc
 * @Author: Syannpe
 */
import Builder from "./Builder";
import Bike from "./Bike";

export default class Director {
    private _builder: Builder;

    constructor(builder: Builder) {
        this._builder = builder;
    }

    public construct(): Bike {
        this._builder.buildFrame();
        this._builder.buildSeat();
        return this._builder.createBike();
    }
}