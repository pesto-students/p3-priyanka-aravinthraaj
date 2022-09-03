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


  rotate(k) {
    if (k == this.size || k % this.size == 0) {
      this.printList()
    } else {
      k = k % this.size
      var curr = this.head
      while (k-- - 1) {
        curr = curr.next
      }
      var temp = this.head
      this.head = curr.next
      this.tail.next = temp
      curr.next = null
    }
  }

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

LL1.append(2)
LL1.append(4)
LL1.append(7)
LL1.append(8)
LL1.append(9)
LL1.rotate(3)
LL1.printList()
let LL2 = new LinkedList()

LL2.append(1)
LL2.append(2)
LL2.append(3)
LL2.append(4)
LL2.append(5)
LL2.append(6)
LL2.append(7)
LL2.append(8)

LL2.rotate(4)
LL2.printList()

