const KeyPressedEventsKeys = ['a', 's', 'd']
const findIndexByPressKey = (target) => KeyPressedEventsKeys.findIndex(v => v == target)


const RelationBetweenKeyAndShape =
    [
        () => new Triangle,
        () => new Circle,
        () => new Rect,
    ]

