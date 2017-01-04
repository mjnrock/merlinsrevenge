var Render = Render || {};
var Model = (Render.Model = Render.Model || {});

class Base {
    constructor() {
        console.log("base");
    }
}

Model.Base = Base;