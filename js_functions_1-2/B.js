module.exports = function partial(fn, ...argN) {
    if (typeof fn === 'function') {
        return fn.bind(null, ...argN)
    } else {
        throw new Error()
    }
}



