let fs = require('fs')

let filename = "input.txt"
let data = fs.readFileSync(process.cwd() + "/" + filename).toString().split(/\r?\n/)

let roomDimentions = data[0].toString().split(" ").map(Number);
let initHoover = data[1].toString().split(" ").map(Number);
let directions = data[data.length -1].toString().split("");
let dirt = data.slice(2,-1);
let dirtCleared = 0;
let route = [];

dirt = dirt.map((element) => {
    return element.split(' ').map(Number)
});

moveHoover();

console.log(route[route.length-1]);
console.log(dirtCleared);

function moveHoover (){
    let x = initHoover[0]
    let y = initHoover[1]

    for (elem of directions){
        if(elem === 'N'){
            y++
            hasBeenCleaned(x, y, dirt)
            route.push([x, y])
        }
        if(elem === 'S'){
            y--
            hasBeenCleaned(x, y, dirt)
            route.push([x, y])
        }
        if(elem === 'E'){
            x++
            hasBeenCleaned(x, y, dirt)
            route.push([x, y])
        }
        if(elem === 'W'){
            x--
            hasBeenCleaned(x, y, dirt)
            route.push([x, y])
        }
    }  
}
function hasBeenCleaned(x, y, dirtPatch) {
    for (shotIndex in dirtPatch) {
        let el = dirtPatch[shotIndex]
        if (el[0] === x && el[1] === y) {
            dirtPatch.splice(dirtPatch.indexOf([x, y]),1);
            dirtCleared++
        }
    }
};
