export class Robot {
    constructor() {
        this.x = 40;
        this.y = 120;
        const game = document.querySelector('game');
        this.element = document.createElement("robot");
        game.appendChild(this.element);
    }
    update() {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=robot.js.map