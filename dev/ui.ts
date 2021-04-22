export class UI  {

    private scoreField: HTMLElement
    private healthField: HTMLElement

    constructor() {
        let game = document.querySelector('game') as HTMLElement

        this.scoreField = document.createElement("div")
        game.appendChild(this.scoreField)

        this.healthField = document.createElement("div")
        game.appendChild(this.healthField)
    }

    public updateUI(score: number, health: number) {
        this.scoreField.innerHTML = "Score " + score
        this.healthField.innerHTML = "Health " + health
    }
}