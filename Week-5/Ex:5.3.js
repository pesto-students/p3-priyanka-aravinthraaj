/**
 * We create a set and iterate through the array, adding each value to the set. If the set already has
 * the value, we return true. If we finish iterating through the array without returning true, we
 * return false
 * @param array - an array of integers
 * @returns true or false
 */

function hasDuplicate(array){
  let valueSet = new Set()
  for(value of array){
    if(valueSet.has(value)){
      return true
    } else {
      valueSet.add(value)
    }
  }
  return false
}

let arr = [1,2,3,4,5,4]
console.log(hasDuplicate(arr))