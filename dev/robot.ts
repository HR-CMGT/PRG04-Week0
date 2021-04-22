export class Robot {
    private element : HTMLElement
    private x : number = 0
    private y : number = 0
    private _health : number = 10

    get health() {
        return this._health
    }

    constructor(){
        let b
        let game = document.querySelector('game') as HTMLElement
        this.element = document.createElement("robot")
        game.appendChild(this.element)
    }

    public getRectangle(): DOMRect {
        return this.element.getBoundingClientRect() as DOMRect 
    }

    public update(): void{
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}