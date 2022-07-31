/**
 * The memoize function takes a function as an argument and returns a function that will return the
 * result of the original function if it has been called with the same arguments before, otherwise it
 * will call the original function and return the result.
 * @param func - the function to be memoized
 */
function add(a, b) {
  return a + b
}

const memoize = (func) => {
  const results = {}
  return (...args) => {
    const argsKey = JSON.stringify(args)
    if (!results[argsKey]) {
      results[argsKey] = func(...args)
    }
    return results[argsKey]
  }
}

const memoizeAdd = memoize((...args) => {
  let sum = args.reduce(add, 0)
  return sum
})


memoizeAdd(100, 100) //returns 200
memoizeAdd(100) //returns 100
memoizeAdd(100, 200) //returns 300
memoizeAdd(100, 100) //returns 200 without computing

console.time("Without memoization")
console.log(memoizeAdd(200, 200))
console.timeEnd("Without memoization")


console.time("With memoization")
console.log(memoizeAdd(200, 200))
console.timeEnd("With memoization")
