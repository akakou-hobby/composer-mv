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


	const index = findIndexByPressKey(key)

	if (index != -1) {
		const chordNotes = baseSound.phrase.chord.nowPlayingChord
		const sortedNotes = sortNotes(chordNotes)
		const note = sortedNotes[index].slice(0, -1) + "6"

		shapes.push(RelationBetweenKeyAndShape[index]())
		mainSound.synths[index].play(note)
	} else {
		console.error(`'${key}' is not set up key`)
	}


}