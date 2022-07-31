import fetch from "node-fetch"

async function fetchData() {
  const doTask1 = () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json())
  }
  const doTask2 = (response) => {
    return response.map(
      (object) => `${object.name} and his website ${object.website}`
    )
  }
  const doTask3 = (data) => {
    return data.length
  }
  const response = await doTask1()
  const users = await doTask2(response)
  const usersLength = await doTask3(users)
  console.log(users, usersLength)
}

fetchData()

function runner(genFn) {
  const itr = genFn()
  function run(arg) {
    const result = itr.next(arg)
    if (result.done) {
      return result.value
    } else {
      return Promise.resolve(result.value).then(run)
    }
  }
  return run()
}

function* init() {
    const doTask1 = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(users => {
          return users;
        });
  }
  const doTask2 = (response) => {
    return response.map(
            (object) => `${object.name} and his website ${object.website}`
          )
  }
  const doTask3 = (data) => {
    return data.length 
  }
  const res1 = yield doTask1()
  const res2 = yield doTask2(res1)
  console.log(res2)
  const res3 = yield doTask3(res2)
  console.log(res3)
}

runner(init);