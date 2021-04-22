import { Robot } from "./robot.js"
import { UI } from "./ui.js"

// TODO IMPORT GAAN GEBRUIKEN ?!?!

class Game {
    public element : HTMLElement
    private robot : Robot
    private score : number = 0
    private ui : UI

    constructor(){
        this.element = document.querySelector('game') as HTMLElement
        this.ui = new UI()
        this.robot = new Robot()
        this.gameLoop()
    }

    private gameLoop(){
        this.robot.update()
        this.ui.updateUI(this.score, this.robot.health)
        requestAnimationFrame(() => this.gameLoop())
    }
}

new Game()