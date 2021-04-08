new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        calculateDamage(max, min) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won. New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost. New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else {
                return false;
            }
        },
        monsterHit() {
            const damage = this.calculateDamage(12, 5)
            this.playerHealth -= damage;
            this.logTurn(false, 'Monster hits Player for ' + damage )
            this.checkWin();
        },
        logTurn(isPlayer, text) {
            this.turns.unshift({
                isPlayer,
                text,
            })
        },
        attack() {
            const damage = this.calculateDamage(10, 3)
            this.monsterHealth -= damage;

            this.logTurn(true, 'Player hits Monster for ' + damage )

            if (this.checkWin()) return;

            
            
            this.monsterHit();
        },
        specialAttack() {
            const damage = this.calculateDamage(20, 10);
            this.monsterHealth -= damage;
            
            this.logTurn(true, 'Player hits Monster for ' + damage )

            if (this.checkWin()) return;

            this.monsterHit();
        },
        heal() {
            const heal = 10;
            this.playerHealth + heal> 100 ? this.playerHealth = 100 : this.playerHealth += heal;

            this.logTurn(true, 'Player heals for ' + heal)

            this.monsterHit();
        },
        giveUp() {
            this.gameIsRunning = false;
        }
    }
});