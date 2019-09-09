let fs = require('fs')

let filename = process.argv[2]
let data = fs.readFileSync(process.cwd() + "/" + filename).toString().split(/\r?\n/)

let roomDimentions = data[0].toString().split(" ").map(Number);
let hooverPosition = data[1].toString().split(" ").map(Number);
let directions = data[data.length - 1].toString().split("");
let dirt = data.slice(2, -1);
let initialDirt = dirt
let dirtCleared = 0;

dirt = dirt.map((element) => {
    return element.split(' ').map(Number)
});

isHooverInRoom(roomDimentions, hooverPosition);

letHaveSomeFun();

function moveHoover(hoover, direction, room) {
    let x = hoover[0]
    let y = hoover[1]

    for (elem of direction) {
        if (elem === 'N' && y < room[1]) {
            y++
            hasBeenCleaned(x, y, dirt)
            hoover = [x, y]
        }
        if (elem === 'S' && y > 0) {
            y--
            hasBeenCleaned(x, y, dirt)
            hoover = [x, y]
        }
        if (elem === 'E' && x < room[0]) {
            x++
            hasBeenCleaned(x, y, dirt)
            hoover = [x, y]
        }
        if (elem === 'W' && x > 0) {
            x--
            hasBeenCleaned(x, y, dirt)
            hoover = [x, y]
        }
    }
    console.log(hoover);
    console.log(dirtCleared);
};
function hasBeenCleaned(x, y, dirtPatch) {
    for (dirtIndex in dirtPatch) {
        let el = dirtPatch[dirtIndex]
        if (el[0] === x && el[1] === y) {
            dirtPatch.splice(dirtPatch.indexOf([x, y]), 1);
            dirtCleared++
        }
    }
};
function isHooverInRoom(room, hoover) {
    if (hoover[0] > room[0] || hoover[1] > room[1]) {
        return console.error(400, 'Your imaginary hoover was never placed in the room! Simulation aborted :(');
    }
    else
        moveHoover(hooverPosition, directions, roomDimentions);
};
function letHaveSomeFun() {
    if (dirt.length === 0) {
        console.log('\x1b[33m', "CONGRATULATIONS!", '\n',
            '\x1b[32m', 'The room is clean now! :)', '\x1b[0m')
    }
    else
        if (dirtCleared != 0) {
            console.log('\x1b[35m',
                'I did the instructions but the room is still dirty :(', '\n',
                '\x1b[32m',
                'The room is however', (dirtCleared / initialDirt.length) * 100,
                '% cleaner, so good job, I guess xD', '\x1b[0m')
        }
        else
            console.log('\x1b[35m',
                'I did the instructions but the room is still dirty :(', '\n',
                "\x1b[31m",
                "You didn't manage to clean ANYTHING! I'm dissapointed in you :P", '\x1b[0m')
};
