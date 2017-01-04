var Game = Game || {};

class Loop {
    static run() {
        //setInterval(Loop.tick, Loop.secPerFrame);
        requestAnimationFrame(Loop.tick);
    }
    static preTick() {
    }
    static tick() {
        Loop.preTick();
        Loop.currentTime = new Date().getTime();
        Loop.elapsedTime = Loop.currentTime - Loop.previousTime;
        if (Loop.elapsedTime > Loop.secPerFrame) {
            Loop.preRender();
            Loop.render();
            Loop.postRender();
            Loop.previousTime = Loop.currentTime - (Loop.elapsedTime % Loop.secPerFrame);
        }
        Loop.postTick();
        requestAnimationFrame(Loop.tick);
    }
    static postTick() {
    }
    static preRender() {
    }
    static render() {
        Game.RenderHandler.render();
    }
    static postRender() {
        ++Loop.renders;
    }
}

Loop.startTime = new Date().getTime();
Loop.previousTime = Loop.startTime;
Loop.currentTime = Loop.startTime;
Loop.elapsedTime = 0;
Loop.renderLag = 0;
Loop.renders = 0;
Loop.frameRate = 10;
Loop.secPerFrame = 1000 / Loop.frameRate; //divisor ticks per second

Game.Loop = Loop;