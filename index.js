function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    function namedFunction() {
        return (Yvonne)
    }
    return namedFunction
}

function returnsAnAnonymousFunction() {
    return function () {
        return (Yvonne)
    }
}