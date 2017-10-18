function memoize(fn) {
  let cache = {}
  return function(...args) {
    if (cache[args]) return cache[args]
    return cache[args] = fn.apply(fn, args)
  }
}

module.exports = memoize
