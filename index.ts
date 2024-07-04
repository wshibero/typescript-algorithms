import {Stack, CList} from "./algorithms/DataStructures"
import {CatalanNumber} from "./algorithms/Dynamic"
import {binarySearch, linearSearch, interpolationSearch} from "./algorithms/Searching"

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

let artist = ["jcole", "tupac", "kendrick lamar", "post malone", "lil uzi vert", "kanye west", "drake", "travis scott", "lil baby", "lil wayne"]

let add = function(x: any){clist.append(x)}

artist.forEach(add)

console.log(`head ${clist.head?.elem} => tail next ${clist.head?.next?.elem}`)
console.log(`tail ${clist.tail?.elem} => tail next ${clist.tail?.next?.elem}`)

clist.append("port")

console.log(clist.display())

clist.delete("port")

console.log(clist.display())

console.log(linearSearch(artist, "post malone"))

let numbers  = [10, 14, 19, 26, 27, 31, 33, 35, 42, 44]

console.log(`binary search: the position of 31 in ${numbers} is ${binarySearch(numbers, 31)}`)


console.log(`interpolation search the position of 31 in ${numbers} is ${interpolationSearch(numbers, 31)}`)