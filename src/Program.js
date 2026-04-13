/**
 * The main program class. Nothing is above this. It is responsible for the main loop and overall program state.
 */
class Program {
    constructor(){
        this.lastTime = 0;
    }
    async preload(){

    }
    setup(){

    }
    loop(){
        const t = performance.now();
        const dt = Math.min(0.1, (t - this.lastTime) / 1000);
        this.lastTime = t;

        this.update(dt);
        this.draw(ctx);
        requestAnimationFrame(this.loop.bind(this));
    }
}