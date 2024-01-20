class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
        console.log('Play: constructor')
    }

    init(stats) {
        console.log('Play: init')
        this.HP = stats.HP
        this.EXP = stats.EXP

    }

    create() {
        console.log('Play: create')
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`)

        this.scene.add('statsoverlayScene', StatsOverlay, false)
        this.scene.launch('statsoverlayScene')

        

        this.tomato = this.add.sprite(0, 0, 'tomato').setOrigin(0).setScale(15, 3)
    }

    update() {
        //console.log('Play: update')
        this.tomato.angle++
    }
}