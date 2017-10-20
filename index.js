function memoize(fn) {
  let cache = Object.create(null)
  return function(...args) {
    if (JSON.stringify(args) in cache) return cache[JSON.stringify(args)]
    return cache[JSON.stringify(args)] = fn.apply(fn, args)
  }
}

module.exports = memoize
