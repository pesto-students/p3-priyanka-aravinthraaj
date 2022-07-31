class Node {
  constructor(element) {
    this.element = element
    this.next = null
    this.flag = 0
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

  rotate(k){
    var curr = this.head
    while (k--) {
      console.log(curr.element)
      curr = curr.next
    }
    var temp = curr.next
    curr.next = null
    temp.next = this.head
    this.head = temp
  }
  detectLoop(){
    var curr = this.head
    while(curr != null){
      if(curr.flag == 1){
        return true
      }
      curr.flag = 1
      curr = curr.next
    }
    return false
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
let LL2 = new LinkedList()


LL1.append(10)
LL1.append(20)
LL1.append(30)
LL1.append(40)
LL1.append(50)



// LL1.printList()


// // LL1.reverse()


// LL1.rotate(2)
// LL1.printList()
LL1.head.next.next.next.next = LL1.head

console.log(LL1.detectLoop())


