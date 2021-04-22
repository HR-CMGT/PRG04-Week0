export class UI {
    constructor() {
        let game = document.querySelector('game');
        this.scoreField = document.createElement("div");
        game.appendChild(this.scoreField);
        this.healthField = document.createElement("div");
        game.appendChild(this.healthField);
    }
    updateUI(score, health) {
        this.scoreField.innerHTML = "Score " + score;
        this.healthField.innerHTML = "Health " + health;
    }
}
//# sourceMappingURL=ui.js.map