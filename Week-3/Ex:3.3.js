/**
 * `createIncrement` returns an array of two functions, `increment` and `log`
 * @returns An array with two functions.
 */
/* Hiding the `count` variable from the global scope. */


function createIncrement() {
  let count = 0
  function increment() {
    count++
  }
  let message = `Count is ${count}`
  function log() {
    console.log(message)
  }
  return [increment, log]
}
const [increment, log] = createIncrement()
increment()
increment()
increment()
log() // What is logged?

// The output of the above code is 0
// variable count is a function scope belongs to createIncrement()
// count inside increment() function cannot be accessed outside of it
// but increment function can access the parent function variables (Here count)
// Hence the count outside the increment function is not updated

// Note: child functions can access the parent function variables 
// but not the other way around. And also parent variable cannot be updated
