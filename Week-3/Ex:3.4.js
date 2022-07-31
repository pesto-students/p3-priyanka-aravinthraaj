/**
 * It creates a stack data structure that can only be accessed through the methods push and pop
 * where the items is encapsulated
 * @returns {
 *   push: [Function: push],
 *   pop: [Function: pop],
 * }
 */
function createStack() {
  var items = []
  return {
    push(item) {
      items.push(item)
    },
    pop() {
      return items.pop()
    },
  }
}
const stack = createStack()
stack.push(1333333)
stack.push(5)
console.log(stack.pop())
console.log(stack.items)
console.log((stack.items = [10, 100, 1000]))
console.log(stack.pop())
console.log(stack.pop())
