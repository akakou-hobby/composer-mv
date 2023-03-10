const shapes = []

const DOCUMENT_URL = 'https://akakou-hobby.github.io/composer-mv/doc/ja.html'

async function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

	let a = createA(DOCUMENT_URL, 'How to use')
	a.position(0, 0)

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


	const obj = KeyPressedEventObjects[key]

	if (!obj) {
		console.error(`'${key}' is not set up key`)
		return
	}

	const chordNotes = baseSound.phrase.chord.getPlayingNotes()
	const sortedNotes = sortNotes(chordNotes)

	const note = sortedNotes[obj.index].slice(0, -1) + "6"
	mainSound.synths[obj.index].play(note)

	const shape = obj.shape()
	shape.text = note
	shapes.push(shape)
}