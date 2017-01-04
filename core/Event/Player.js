var Event = Event || {};

class Player {
    static onMouseMove(e) {
        
    }
    static onMouseClick(e) {
        
    }
    
   /**
    * 
    * @param {type} e
    * @returns {Array} 
    *   return of [0,0] is canvas left,top
    *   i.e. coordinates are relative to canvas scope
    */
    static getMousePosition(e) {
        var rect = Game.Manager.Render.Canvas.getBoundingClientRect();
        return [Math.floor(e.clientX - rect.left), Math.floor(e.clientY - rect.top)];
    }
}

Event.Player = Player;