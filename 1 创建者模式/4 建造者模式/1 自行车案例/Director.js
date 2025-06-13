export default class Director {
    _builder;
    constructor(builder) {
        this._builder = builder;
    }
    construct() {
        this._builder.buildFrame();
        this._builder.buildSeat();
        return this._builder.createBike();
    }
}
