function PromisePolyFill(executor) {
  let onResolve, onReject
  let fulfilled = false,
    rejected = false,
    called = false,
    value

  function resolve(v) {
    fulfilled = true
    value = v

    if (typeof onResolve === "function") {
      onResolve(value)
      called = true
    }
  }

  function reject(reason) {
    rejected = true
    value = reason

    if (typeof onReject === "function") {
      onReject(value)
      called = true
    }
  }

  this.then = function (callback) {
    onResolve = callback

    if (fulfilled && !called) {
      called = true
      onResolve(value)
    }
    return this
  }

  this.catch = function (callback) {
    onReject = callback

    if (rejected && !called) {
      called = true
      onReject(value)
    }
    return this
  }

  this.finally = function (callback) {
    if (called) {
      callback()
    }
    return this
  }

  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

PromisePolyFill.resolve = (val) =>
  new PromisePolyFill(function executor(resolve, _reject) {
    resolve(val)
  })

PromisePolyFill.reject = (reason) =>
  new PromisePolyFill(function executor(resolve, reject) {
    reject(reason)
  })

PromisePolyFill.all = (promises) => {
  let fulfilledPromises = [],
    result = []

  function executor(resolve, reject) {
    promises.forEach((promise, index) =>
      promise
        .then((val) => {
          fulfilledPromises.push(true)
          result[index] = val

          if (fulfilledPromises.length === promises.length) {
            return resolve(result)
          }
        })
        .catch((error) => {
          return reject(error)
        })
    )
  }
  return new PromisePolyFill(executor)
}

let p = new PromisePolyFill((resolve, reject) => {
  let randomNumber = Math.floor(Math.random() * 100)
  let afterResolve = (value) => {
    return `${value} is not divisible by 5, so resolved`
  }
  let afterReject = (value) => {
    return `${value} is divisible by 5, so rejecting`
  }
  if (randomNumber % 5 === 0) {
    reject(afterReject(randomNumber))
  } else {
    resolve(afterResolve(randomNumber))
  }
})
  .then((res) => console.log(res))
  .catch((res) => console.log(res))
  .finally(() => console.log("Finally i am here")) 
