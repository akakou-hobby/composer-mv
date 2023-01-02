const objects = []

async function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	clear()

	for (const obj of objects)
		obj.draw()
}


async function keyPressed() {
	if (!sound) {
		sound = new RandomChordSynthPhrase()
		sound.listenRandomPhrases(CHORDES_PHRASES)
		return
	}


	const obj = KeyPressedEvents[key]()

	if (obj)
		objects.push(obj)
}