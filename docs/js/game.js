import { Robot } from "./robot.js";
import { UI } from "./ui.js";
class Game {
    constructor() {
        this.ui = new UI();
        this.robot = new Robot();
        this.robot.update();
        this.ui.update();
    }
}
new Game();
//# sourceMappingURL=game.js.map