export class UI  {

    private scoreField: HTMLElement

    constructor() {
        const game = document.querySelector('game') as HTMLElement
        this.scoreField = document.createElement("ui")
        game.appendChild(this.scoreField)
    }

    public update() {
        this.scoreField.innerHTML = `Score: 10`
    }
}