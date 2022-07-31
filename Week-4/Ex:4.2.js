var Person = function () {}
Person.prototype.initialize = function (name, age) {
  this.name = name
  this.age = age
}

var Teacher = function () {}
Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} he/she is ${this.age} and teaching ${subject}`)
}

Teacher.prototype.initialize = Person.prototype.initialize

// TODO: create the class Teacher and a method teach
var him = new Teacher()
him.initialize("Adam", 45)
him.teach("Inheritance")

