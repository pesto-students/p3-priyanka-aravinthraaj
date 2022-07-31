class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
    this.tail = null
  }

  prepend(element) {
    var node = new Node(element)
    var temp = this.head
    this.head = node
    node.next = temp
  }

  append(element) {
    var node = new Node(element)
    var current
    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  reverse() {
    var prev = null
    var current = this.head
    var next = null
    while (current !== null) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head = prev
  }

  // rotate(k) {
  //   if (k == this.size || k % this.size == 0) {
  //     this.printList()
  //   } else {
  //     k = k % this.size
  //     var curr = this.head
  //     while (k-- - 1) {
  //       curr = curr.next
  //     }
  //     var temp = this.head
  //     this.head = curr.next
  //     this.tail.next = temp
  //     curr.next = null
  //   }
  // }

  printList() {
    var curr = this.head
    var str = ""
    while (curr) {
      str += curr.element + " "
      curr = curr.next
    }
    console.log(str)
  }
}

let LL1 = new LinkedList()

LL1.append(10)
LL1.append(20)
LL1.append(30)
LL1.append(40)
LL1.append(50)

LL1.printList()

LL1.reverse()


LL1.printList()
