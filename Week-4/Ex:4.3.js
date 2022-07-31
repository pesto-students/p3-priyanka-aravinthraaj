let fibonacciRange = {
  range: 10,
  info: `i can print fibonacci series upto a given range`,
}

fibonacciRange[Symbol.iterator] = function () {
  return {
    initialNumber: 1,
    previousNumber: 0,
    currentNumber: 0,
    range: this.range,
    next() {
      if (this.initialNumber++ <= this.range) {
        [this.previousNumber, this.currentNumber] = [this.currentNumber,this.previousNumber + this.currentNumber || 1]
        return { value: this.previousNumber, done: false }
      } else {
        return { done: true }
      }
    },
  }
}

for (let i of fibonacciRange) {
  console.log(i)
}


console.log(fibonacciRange.info)


