import {Stack, CList} from "./algorithms/DataStructures"
import {CatalanNumber} from "./algorithms/Dynamic"

console.log("hello world")

let stack = new Stack()

let word = "racecar"

for(let i = 0; i < word.length; i++){
  stack.push(word[i])
}

let reversedWord = ""
while(!stack.isEmpty()){
  reversedWord += stack.pop()
}

console.log(reversedWord === word)

console.log(CatalanNumber(6))

// catal

let clist = new CList()

let artist = ["jcole", "tupac", "kendrick lamar"]

let add = function(x: any){clist.append(x)}

artist.forEach(add)

console.log(`head ${clist.head?.elem} => tail next ${clist.head?.next?.elem}`)
console.log(`tail ${clist.tail?.elem} => tail next ${clist.tail?.next?.elem}`)

clist.append("port")

console.log(clist.display())

clist.delete("port")

console.log(clist.display())