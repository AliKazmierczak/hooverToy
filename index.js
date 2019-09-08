// let fileSystem = require("file-system");
let fs = require('fs')

let filename = "input.txt"
let data = fs.readFileSync(process.cwd() + "/" + filename).toString().split(/\r?\n/)

let roomDimentions = data.slice(0,1).toString().split(" ").map(Number);
let initHoover = data.slice(1,2).toString().split(" ").map(Number);
let directions = data.slice(-1).toString().split("");
let dirt = data.slice(2,-1);


//moveHoover(roomDimentions, initHoover, directions, dirt)

console.log('room dimentions are ', roomDimentions);
console.log(typeof(roomDimentions[0]))
console.log('initHoover = ' + initHoover);
console.log(typeof(initHoover[0]))
// console.log('directions = ' + directions);
console.log('dirt = ' + dirt);
console.log(typeof(dirt[0]))

// function moveHoover (room, hooverPosition, directions, target){

// }


