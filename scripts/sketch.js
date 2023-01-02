const shapes = []

async function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	clear()

	for (const shape of shapes)
		shape.draw()
}


async function keyPressed() {
	if (!mainSound) {
		baseSound = new RandomChordSynthPhrase()
		baseSound.playRandomPhrases(CHORDES_PHRASES)

		mainSound = new MultiSynth()


		return
	}


	const obj = KeyPressedEvents[key]

	if (obj) {
		shapes.push(obj.shape())
		obj.sound().play('C4')
	}


}