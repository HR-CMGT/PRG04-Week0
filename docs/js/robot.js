export class Robot {
    constructor() {
        this.x = 0;
        this.y = 0;
        this._health = 10;
        let b;
        let game = document.querySelector('game');
        this.element = document.createElement("robot");
        game.appendChild(this.element);
    }
    get health() {
        return this._health;
    }
    getRectangle() {
        return this.element.getBoundingClientRect();
    }
    update() {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=robot.js.map