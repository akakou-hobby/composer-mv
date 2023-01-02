var t

async function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

	t = new Triangle()
}

function draw() {
	clear();
	t.draw()
}


const KeyPressedEvents = {
	'a': () => {
	},
	's': () => {
	},
	'd': () => {
	},
	'f': () => {
	}
}

async function keyPressed() {
	if (!sound) {
		sound = new RandomChordSynthPhrase()
		sound.listenRandomPhrases(CHORDES_PHRASES)
		return
	}


	if (key == '') {

	}
}