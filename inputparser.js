const fs = require('fs');

let filename = process.argv[2];
let data = fs.readFileSync(process.cwd() + "/" + filename).toString().split(/\r?\n/);
let roomDimentions = data[0].toString().split(" ").map(Number);
roomDimentions = {
    l: roomDimentions[0],
    w: roomDimentions[1]
};
let dirtPatchesCoordinates = data.slice(2, -1);
dirtPatchesCoordinates = dirtPatchesCoordinates.map((element) => {
    let coordinates = element.split(' ').map(Number)
    return {
        x: coordinates[0],
        y: coordinates[1]
    }
});
let hooverCoordinates = data[1].toString().split(" ").map(Number);
hooverCoordinates = {
    x: hooverCoordinates[0],
    y: hooverCoordinates[1]
};
let hooverInstructions = data[data.length - 1].toString().split("");

exports.roomDimentions = roomDimentions;
exports.dirtPatchesCoordinates = dirtPatchesCoordinates;
exports.hooverCoordinates = hooverCoordinates;
exports.hooverInstructions = hooverInstructions;