

var MAX_SIZE = 0
const SCALE_SIZE = 20

window.onload =
    () => MAX_SIZE = windowHeight > windowWidth ? windowHeight : windowWidth


class Shape {
    constructor() {
        this.baseX = 0
        this.baseY = 0

        this.size = 1
        this.color = color(0, 0, 0)

        this.hasHalfFinished = false
        this.hasFinished = false
    }

    randomize() {
        this.baseX = random(0, windowWidth)
        this.baseY = random(0, windowHeight)

        this.size = random(0, MAX_SIZE)

        this.color = color(
            random(0, 255),
            random(0, 255),
            random(0, 255),
        )
    }

    draw() {
        throw new Error('please implement draw')
    }

    scaleUp() {
        this.size += SCALE_SIZE
        this.hasHalfFinished = this.hasHalfFinished || this.size > MAX_SIZE
    }

    scaleDown() {
        this.size -= SCALE_SIZE
        this.hasFinished = this.hasFinished || this.size < 0
    }
}

class Triangle extends Shape {
    constructor() {
        super()
        this.randomize()
    }


    draw() {
        if (this.hasFinished)
            return

        this._draw()

        if (this.hasHalfFinished) {
            this.scaleDown()
        }
        else
            this.scaleUp()

    }

    _draw() {
        fill(this.color)
        noStroke()
        triangle(
            this.baseX - this.size / 2, this.baseY + this.size / 2,
            this.baseX, this.baseY - this.size / 2,
            this.baseX + this.size / 2, this.baseY + this.size / 2
        )
    }
}