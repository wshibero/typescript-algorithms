export class Stack{
  public items: any[]
  public pos: number 
  constructor(){
    this.items = []
    this.pos = 0
  }
  push(item: any){
    this.items[this.pos] = item
    this.pos++
  }
  pop(): any{
    this.pos -= 1
    return this.items[this.pos]
  }
  peek(): any{
    return this.items[0]
  }
  isEmpty(): boolean{
    return this.pos == 0
  }
  clear(){
    this.pos = 0
  }
}

export class CNode{
  public elem: any 
  public next: CNode | null
  constructor(elem: any){
    this.elem = elem
    this.next = null
  }
}

export class CList{
  public head: CNode | null
  public tail: CNode | null
  public size: number
  constructor(){
    this.head = this.tail = null
    this.size = 0
  }
  append(elem: any){
    let node = new CNode(elem)
    if (this.head == null){
      this.head = this.tail = node
    }else if(this.tail != null){
      this.tail.next = node 
      node.next = this.head 
      this.tail = node
    }
    this.size += 1
  }
  display(): any[]{
    let data: any[] = []
    if (this.head !== null) {
      let cur = this.head 
      while(cur.next !== this.head){
        data.push(cur.elem)
        if (cur.next !== null) {         
          cur = cur.next;  
        } else {
          break;
        }
      }data.push(cur.elem)
    }
    return data        
  }
  delete(elem: any){
    let cur = this.head;
    if (cur !== null) {
      while (cur.next !== null && cur.next.elem !== elem) {
        if (cur.next.next !== null) {
          cur = cur.next;
        } else if(cur.next.next == this.head){
          cur = null 
          break
        }
      }
      if (cur !== null && cur.next !== null) { 
        cur.next = cur.next.next;
      }
    }
  }
}
