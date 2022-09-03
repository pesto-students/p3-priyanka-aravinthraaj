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

}

let LL1 = new LinkedList()


LL1.append(10)
LL1.append(20)
LL1.append(30)
LL1.append(40)
LL1.append(50)


LL1.head.next.next.next.next = LL1.head

console.log(LL1.detectLoop())


