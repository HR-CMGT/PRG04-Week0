import { Robot } from "./robot.js";
import { UI } from "./ui.js";
class Game {
    constructor() {
        this.score = 0;
        this.element = document.querySelector('game');
        this.ui = new UI();
        this.robot = new Robot();
        this.gameLoop();
    }
    gameLoop() {
        this.robot.update();
        this.ui.updateUI(this.score, this.robot.health);
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map