function mod(n, m) {
    return ((n % m) + m) % m;
}

function sleep(msec) {
    return new Promise(function (resolve) {
        setTimeout(function () { resolve() }, msec);
    })
}


function compareString(a, b) {
    if (a < b)
        return -1

    if (a > b)
        return 1

    return 0
}


function reverseString(str) {
    var splitString = str.split("")
    var reverseArray = splitString.reverse()
    var joinArray = reverseArray.join("")

    return joinArray
}

function compareNotes(a, b) {
    const reversedA = reverseString(a)
    const reversedB = reverseString(b)

    const lastA = reversedA[0]
    const lastB = reversedB[0]

    console.log(lastA, lastB)

    if (lastA != lastB) {
        return lastA - lastB
    }

    return compareString(
        reverseString(a),
        reverseString(b)
    )
}

function sortNotes(notes) {
    notes.sort(compareNotes);

    return notes
}


