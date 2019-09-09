const { Room } = require('./models/room');
const { Hoover } = require('./models/hoover');
const {
    hooverInstructions,
    roomDimentions,
    dirtPatchesCoordinates,
    hooverCoordinates
} = require('./inputparser')

let hoover = new Hoover(
    hooverInstructions
);
let room = new Room(
    roomDimentions,
    dirtPatchesCoordinates,
    hooverCoordinates,
    hoover
);














