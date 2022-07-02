/* Using the `call` and `apply` methods to call the function `calculateMarksofStudent` with the
`Student` object as the `this` context. */
let Student = {
  standard: "10th",
  section: "A",
  sum: function (args) {
    let result = args.reduce((x, y) => {
      return x + y
    }, 0)
    return result
  },
}
calculateMarksofStudent = function (fullname, marks) {
  console.log(
    `${fullname} of ${this.standard} ${
      this.section
    } has scored total marks of ${this.sum(marks)}`
  )
}
calculateMarksofStudent.call(Student, "John", [78, 88, 98, 69, 91, 69])
calculateMarksofStudent.apply(Student, ["John", [78, 88, 98, 69, 91, 69]])
let newfunc = calculateMarksofStudent.bind(
  Student,
  "John",
  [78, 88, 98, 69, 91, 69]
)
newfunc()
