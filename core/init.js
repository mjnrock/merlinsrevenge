Game.Manager.Render = new Render.Manager();
Game.Manager.Render.CTX.font = "10pt Courier";
Game.Manager.Render.Canvas.addEventListener("mousemove", function (e) {
    Event.Player.onMouseMove(e);
});
Game.Manager.Render.Canvas.addEventListener("click", function (e) {
    Event.Player.onMouseClick(e);
});