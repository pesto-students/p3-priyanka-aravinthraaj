/**
 * We iterate through the string, and if the character is a vowel, we add it to a hashmap with the
 * value of 1, or if it already exists, we increment the value by 1
 * @param string - the string to be evaluated
 * @returns { t: 2, e: 1, s: 1, a: 1, i: 1, o: 1, u: 1 }
 */


function vowelCount(string) {
  let hashMap = new Map()

  function isVowel(char) {
    return "aeiou".includes(char)
  }

  for (char of string) {
    if (isVowel(char)) {
      if (hashMap.has(char.toLowerCase())) {
        hashMap.set(char, hashMap.get(char) + 1)
      } else {
        hashMap.set(char, 1)
      }
    }
  }
  return Object.fromEntries(hashMap)
}

let result = vowelCount("test aeiou")
console.log(result)

 //t => e
 //t, u 