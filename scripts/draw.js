
var MAX_SIZE = 0
const SCALE_SIZE = 20

window.onload =
    () => MAX_SIZE = windowHeight > windowWidth ? windowHeight / 2 : windowWidth / 2


class Shape {
    constructor(randomize = true) {
        this.baseX = 0
        this.baseY = 0

        this.size = 1
        this.color = color(0, 0, 0)

        this.hasHalfFinished = false
        this.hasFinished = false
        this.text = ""

        if (randomize)
            this.randomize()
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

    scaleUp() {
        this.size += SCALE_SIZE
        this.hasHalfFinished = this.hasHalfFinished || this.size > MAX_SIZE
    }

    scaleDown() {
        this.size -= SCALE_SIZE
        this.hasFinished = this.hasFinished || this.size < 0
    }

    draw() {
        if (this.hasFinished)
            return

        fill(this.color)
        noStroke()

        this._draw()

        fill(color("white"))
        textSize(this.size / 3);
        textAlign(CENTER);
        text(this.text, this.baseX, this.baseY + this.size / 3);


        if (this.hasHalfFinished) {
            this.scaleDown()
        }
        else
            this.scaleUp()
    }
}

class Triangle extends Shape {
    _draw() {
        triangle(
            this.baseX - this.size / 2, this.baseY + this.size / 2,
            this.baseX, this.baseY - this.size / 2,
            this.baseX + this.size / 2, this.baseY + this.size / 2
        )
    }
}


class Circle extends Shape {
    _draw() {
        circle(
            this.baseX, this.baseY, this.size
        )
    }
}

class Rect extends Shape {
    _draw() {
        rect(
            this.baseX - this.size / 2,
            this.baseY - this.size / 2,
            this.size,
            this.size
        );
    }
}
