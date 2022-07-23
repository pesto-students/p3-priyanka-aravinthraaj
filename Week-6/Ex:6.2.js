function print(arr, rowStart, rowEnd, columnStart, columnEnd) {
  if (rowStart >= columnStart || rowEnd >= columnEnd) return

  for (let pointer = rowEnd; pointer < columnEnd; pointer++) { // 00,01,02,03  => 11, 12
    console.log(arr[rowStart][pointer] + " ")
  }

  for (let pointer = rowStart + 1; pointer < columnStart; pointer++) { // 13,23,33 => 22
    console.log(arr[pointer][columnEnd - 1] + " ")
  }

  if (columnStart - 1 != rowStart) {
    for (let pointer = columnEnd - 2; pointer >= rowEnd; pointer--) { // 32,31,30 => 21
      console.log(arr[columnStart - 1][pointer] + " ")
    }
  }

  if (columnEnd - 1 != rowEnd) {
    for (let pointer = columnStart - 2; pointer > rowStart; pointer--) { // 20 => 10
      console.log(arr[pointer][rowEnd] + " ")
    }
  }
  print(arr, rowStart + 1, rowEnd + 1, columnStart - 1, columnEnd - 1)
}

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]
let columnStart = arr.length
let columnEnd = arr[0].length

print(arr, 0, 0, columnStart, columnEnd)

