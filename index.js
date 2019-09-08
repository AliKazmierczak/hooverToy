let fs = require('fs')

let filename = "input.txt"
let data = fs.readFileSync(process.cwd() + "/" + filename).toString().split(/\r?\n/)

let roomDimentions = data[0].toString().split(" ").map(Number);
let initHoover = data[1].toString().split(" ").map(Number);
let directions = data[data.length -1].toString().split("");
let dirt = data.slice(2,-1);
let dirtCleared = 0;

dirt = dirt.map((element) => {
    return element.split(' ').map(Number)
});

isHooverInRoom(roomDimentions, initHoover);

function moveHoover (hoover, direction, room){
   let x = hoover[0]
   let y = hoover[1]
   let route = [];

    for (elem of direction){
        if(elem === 'N' && y < room[1]){
            y++
            hasBeenCleaned(x, y, dirt)
            route.push([x, y])
        }
        if(elem === 'S' && y > 0){
            y--
            hasBeenCleaned(x, y, dirt)
            route.push([x, y])
        }
        if(elem === 'E' && x < room[0]){
            x++
            hasBeenCleaned(x, y, dirt)
            route.push([x, y])
        }
        if(elem === 'W' && x > 0){
            x--
            hasBeenCleaned(x, y, dirt)
            route.push([x, y])
        }
   } 
   console.log(route[route.length-1]);
   console.log(dirtCleared); 
};
function hasBeenCleaned(x, y, dirtPatch) {
    for (shotIndex in dirtPatch) {
        let el = dirtPatch[shotIndex]
        if (el[0] === x && el[1] === y) {
            dirtPatch.splice(dirtPatch.indexOf([x, y]),1);
            dirtCleared++
        }
    }
};
function isHooverInRoom (room, hoover){
   if (hoover[0] > room[0] || hoover[1] > room[1]){
    return console.error(400, 'Your imaginary hoover was never placed in the room! Simulation aborted :(');
   }
   else
   moveHoover(initHoover, directions, roomDimentions);
}