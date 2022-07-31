function maxSubArraySum(a, size) {
  let max_so_far = Number.MIN_VALUE,
    max_ending_here = 0

  for (i = 0; i < size; i++) {
    max_ending_here += a[i]

    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here
    }

    if (max_ending_here < 0) {
      max_ending_here = 0
    }
  }
  console.log("Maximum contiguous sum is " + max_so_far)
}

let a = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let n = a.length
maxSubArraySum(a, n)
