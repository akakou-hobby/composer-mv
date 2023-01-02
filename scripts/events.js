const KeyPressedEvents = {
    'a': {
        shape: () => new Triangle(),
        sound: () => mainSound.synths[0]
    },
    's': {
        shape: () => new Circle(),
        sound: () => mainSound.synths[1]
    },
    'd': {
        shape: () => new Rect(),
        sound: () => mainSound.synths[2]
    },
}
