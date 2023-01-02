var baseSound;
var mainSound;

const TEMPO = 150
const TEMPO_PARCENT = 60 / TEMPO
const WAIT_TIME = 50

const BASE_NOTES = [
    'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
]

const NOTES = BASE_NOTES.map(v => v + '2').concat(BASE_NOTES.map(v => v + '3').concat(BASE_NOTES.map(v => v + '4')).concat(BASE_NOTES.map(v => v + '5')))

const CHORDES_PHRASES =
    [
        ['C4', 'G3', 'Am3', 'Em3', 'F3', 'C3', 'F3', 'G3'],
        ['Am3', 'F3', 'C4', 'G3'],
        ['F3', 'C4', 'G3', 'Am3'],
        ['C4', 'Am3', 'Dm3', 'G3'],
    ]

const DIFF_CORDS = {
    'major': [0, 4, 7],
    'minor': [0, 3, 7],
};


class Synth {
    constructor() {
        this.synth = new Tone.Synth().toDestination()
    }

    async start() {
        await Tone.start()
    }

    play(note, time) {
        this.synth.triggerAttackRelease(note, "8n", time)
    }
}

class MultiSynth {
    constructor() {
        this.synths = [
            new Synth(),
            new Synth(),
            new Synth(),
            new Synth(),
        ]
    }

    async start() {
        for (const synth of this.synths)
            await synth.start()
    }

}

class MultiSynthChord {
    constructor() {
        this.synths = new MultiSynth()
        this.nowPlayingChord = []
    }

    play(chordNote, time) {
        const isMajaor = chordNote.search('m') == -1
        const majarOrMinor = isMajaor ? DIFF_CORDS.major : DIFF_CORDS.minor

        const notesIndex = NOTES.findIndex(v => v == chordNote.replace('m', ''))
        // console.log("----")

        this.nowPlayingChord = majarOrMinor.map((d, synthsIndex) => {
            var octoveUp = 0

            if (synthsIndex == 0 && random(1, 3) > 2) {
                const half = NOTES.findIndex(v => v == 'D#')
                const base = BASE_NOTES.length + 1
                octoveUp = notesIndex < half ? base : -base
            }

            const note = NOTES[notesIndex + d + octoveUp]
            // console.log("index: ", notesIndex + d + octoveUp)

            return note
        })

        this.nowPlayingChord.map((note, synthsIndex) => {
            const synth = this.synths.synths[synthsIndex]
            synth.play(note, time)
        })

        // console.log("----")
    }
}


class MultiSynthPhrase {
    constructor() {
        this.chord = new MultiSynthChord()
    }


    play(phrase) {
        let nextTime = Tone.now()
        for (let j = 0; j < 2; j++)
            for (let note of phrase) {
                for (let i = 0; i < 4; i++) {
                    nextTime += TEMPO_PARCENT
                    this.chord.play(note, nextTime)
                }
            }

        return nextTime
    }

}

class RandomChordSynthPhrase {
    constructor() {
        this.phrase = new MultiSynthPhrase()
        this.lastCode = null
    }

    playRandom(phrases) {
        // const filteredPhrases = phrases.filter((v) => v[v.length - 1] != this.lastCode)
        // const phrase = random(filteredPhrases)
        const phrase = random(phrases)

        // const lastPhrase = phrases[phrases.length - 1]
        // this.lastCode = lastPhrase[lastPhrase.length - 1]


        return this.phrase.play(phrase)
    }

    async playRandomPhrases(phrases) {
        while (1) {
            console.log(1)
            const nextTime = this.playRandom(phrases)

            const remain = (nextTime - Tone.now()) * 1000

            await sleep(remain)
        }
    }
}