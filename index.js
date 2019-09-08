// let fileSystem = require("file-system");
const lineReader = require('line-reader');


let data = [ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW' ]
let roomDimentions = data.slice(0,1).toString().split(" ");
let initHoover = data.slice(1,2).toString().split(" ");
let directions = data.slice(-1).toString().split("");
let dirt = data.slice(2,-1).toString().flat();

//moveHoover(roomDimentions, initHoover, directions, dirt)

// console.log('room dimentions are ' + roomDimentions);
// console.log('initHoover = ' + initHoover);
// console.log('directions = ' + directions);
console.log('dirt = ' + dirt);

function moveHoover (room, hooverPosition, directions, target){

}

// function readData(){
//   let input = [];
//   lineReader.eachLine('input.txt', function(line) {
//     input.push(line);
//     console.log(input)
//     return input
//   });
// }
