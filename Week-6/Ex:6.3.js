let arr = [0, 1, 2, 1, 1, 2, 1, 2, 0, 0, 0]
function sortNumbers(arr) {
  let countSet = { 0: 0, 1: 0, 2: 0 }
  for (value of arr) {
    countSet[value] += 1
  }
  let i = 0
  for (const key in countSet) {
    let counter = countSet[key]
    while (counter--) {
      arr[i++] = parseInt(key)
    }
  }
  return arr
}

console.log(sortNumbers(arr))
