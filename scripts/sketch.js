async function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

}

function draw() {
}


async function keyPressed() {
	if (!sound) {
		sound = new RandomChordSynthPhrase()
		sound.listenRandomPhrases(CHORDES_PHRASES)
	}
}