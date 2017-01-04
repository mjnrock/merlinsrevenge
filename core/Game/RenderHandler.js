var Game = Game || {};

class RenderHandler {
    static tick() {
        Game.Manager.Render.CTX.clearRect(0, 0, Game.Manager.Render.Canvas.width, Game.Manager.Render.Canvas.height);
        RenderHandler.keys = RenderHandler.queue.getKeys();
        for (var i = 0; i < RenderHandler.queue.size(); i++) {
            if (RenderHandler.queue.get(RenderHandler.keys[i]) != null) {
                RenderHandler.queue.get(RenderHandler.keys[i]).render();
            }
        }
    }
}
RenderHandler.queue = new Utility.HashMap();
Game.RenderHandler = RenderHandler;