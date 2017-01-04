var Render = Render || {};

class Manager {
    constructor() {
        this.lineWidth = 4;
        this.Canvas = document.getElementById("stage");
        this.CTX = this.Canvas.getContext("2d");
    }
    
    /*sample(x, y) {
        Domination.Game.Manager.RENDER.CTX.save();
        Domination.Game.Manager.RENDER.CTX.strokeStyle = Domination.Game.Manager.CONFIG.Settings.Colors.Selection;
        Domination.Game.Manager.RENDER.CTX.lineWidth = this.lineWidth;
        Domination.Game.Manager.RENDER.CTX.strokeRect(x * Domination.Game.Manager.CONFIG.Settings.Images.Size.Width + (this.lineWidth / 2), y * Domination.Game.Manager.CONFIG.Settings.Images.Size.Height + (this.lineWidth / 2), Domination.Game.Manager.CONFIG.Settings.Images.Size.Width - this.lineWidth, Domination.Game.Manager.CONFIG.Settings.Images.Size.Height - this.lineWidth);
        Domination.Game.Manager.RENDER.CTX.restore();
    }*/
}

Render.Manager = Manager;