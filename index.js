// let fileSystem = require("file-system");
let fs = require('fs')

let filename = "input.txt"
let data = fs.readFileSync(process.cwd() + "/" + filename).toString().split(/\r?\n/)

let roomDimentions = data[0].toString().split(" ").map(Number);
let initHoover = data[1].toString().split(" ").map(Number);
let directions = data[data.length -1].toString().split("");
let dirt = data.slice(2,-1);

dirt = dirt.map((element) => {
    return element.split(' ').map(Number)
})
//moveHoover(roomDimentions, initHoover, directions, dirt)

console.log('room dimentions are ', roomDimentions);
console.log('initHoover = ', initHoover);
console.log('dirt = ', dirt);

// function moveHoover (room, hooverPosition, directions, target){

// }


