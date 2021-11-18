let canvas = {
    c: null,
    canvas: null,
    sprite: null,
    frame: 0,
    init() {
        this.c = document.getElementById('canvas').getContext('2d')
        this.canvas = document.getElementById('canvas')

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },
    anim() {
        setInterval(() => {
            this.frame++
            if(this.frame > 149) {
                this.frame = 0;
            }
        }, 100);
    },
    render() {
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.sprite = new Image()
        this.sprite.src = './images/123.png'
        this.c.drawImage(this.sprite, 0 , this.frame * 172, 716, 172, 0, 0, 716, 172)
    },
    run() {
        window.requestAnimationFrame(() => {
            this.render()
            this.run()
        })
    },
    start() {
        this.init()
        this.run()
        this.anim()
    },
}

window.addEventListener('load', () => {
    canvas.start()
})