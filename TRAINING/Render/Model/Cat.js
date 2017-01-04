var Render = Render || {};
var Model = (Render.Model = Render.Model || {});

class Cat extends Model.Base {
    constructor() {
        super();
        console.log("cat");
    }
}

Model.Cat = Cat;