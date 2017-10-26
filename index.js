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
  if (!fn.then) {
    throw new Error('the function passed into memoizeAsync should return a thenable object, for instance, a promise')
  }
  let cache = Object.create(null)
  return function(...args) {
    if (JSON.stringify(args) in cache) return cache[JSON.stringify(args)]
    return fn.apply(fn, args).then(res => cache[JSON.stringify(args)] = res)
  }
}

module.exports = {
  memoize,
  memoizeAsync
}
