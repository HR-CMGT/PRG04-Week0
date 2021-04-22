export class Robot {
    private element : HTMLElement
    private x : number = 40
    private y : number = 120

    constructor(){
        const game = document.querySelector('game') as HTMLElement
        this.element = document.createElement("robot")
        game.appendChild(this.element)
    }

    public update(): void{
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}