function memoize(fn) {
  let cache = Object.create(null)
  return function(...args) {
    if (JSON.stringify(args) in cache) return cache[JSON.stringify(args)]
    return cache[JSON.stringify(args)] = fn.apply(fn, args)
  }
}

/**
 * memoizeAsync ONLY accepts the function that returns a thenable object, for instance, a promise
 */

function memoizeAsync(fn) {
  let cache = Object.create(null)
  return function(...args) {
    if (JSON.stringify(args) in cache) return cache[JSON.stringify(args)]
    try {
      return fn.apply(fn, args).then(res => cache[JSON.stringify(args)] = res)
    } catch(e) {
      throw new Error('The most possible reason is that the async function you passed in doesn\'t return a thenable object.')
    }
  }
}

module.exports = {
  memoize,
  memoizeAsync
}
