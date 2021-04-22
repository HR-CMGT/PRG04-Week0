import { Robot } from "./robot.js"
import { UI } from "./ui.js"

class Game {
    private robot : Robot
    private ui : UI

    constructor(){
        this.ui = new UI()
        this.robot = new Robot()

        this.robot.update()
        this.ui.update()
    }
}

new Game()