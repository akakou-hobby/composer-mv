function mod(n, m) {
    return ((n % m) + m) % m;
}

function sleep(msec) {
    return new Promise(function (resolve) {
        setTimeout(function () { resolve() }, msec);
    })
}