// Write your solution here!

const append = ["Milo", "Otis", "Garfield"];
append.push("Odie") ;
console.log(append);

const prepend =  ["Milo", "Otis", "Garfield"];
const removeLast = ["Milo", "Otis", "Garfield"];
const removeFirst = ["Milo", "Otis", "Garfield"];

prepend.unshift("Odie") ;
removeLast.pop() ;
removeFirst.shift();