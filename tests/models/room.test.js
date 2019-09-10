const { Room } = require('../../models/room');
const { Hoover } = require('../../models/hoover');

let dimentions = {
    l: 5,
    w: 5
};
let instructions = [];
let testHoover = new Hoover(instructions);
let hoover = testHoover;

describe('tests hasBeenCleaned() function', () => {
    test('checking whether a dirt patch was cleared when hoover reaches it', () => {
        let dirtPatchesCoordinates = [{
            x: 1,
            y: 2
        }];
        let hooverCoordinates = {
            x: 1,
            y: 2
        };
        let testRoom = new Room(dimentions, dirtPatchesCoordinates, hooverCoordinates, hoover);
        let dirtClearedBeforeCleaning = testRoom.dirtCleared;
        expect(dirtClearedBeforeCleaning).toEqual(0);

        let hasHooverClearedDirt = testRoom.hasBeenCleaned();
        expect(hasHooverClearedDirt).toBe(true);

        let dirtClearedAfterCleaning = testRoom.dirtCleared;
        expect(dirtClearedAfterCleaning).toEqual(1);
    });
    test("checks whether hoover registers he hasn't cleared a dirt when on empty patch", () => {
        let dirtPatchesCoordinates = [{
            x: 2,
            y: 2
        }];
        let hooverCoordinates = {
            x: 1,
            y: 2
        };
        let testRoom = new Room(dimentions, dirtPatchesCoordinates, hooverCoordinates, hoover);
        let dirtClearedBeforeCleaning = testRoom.dirtCleared
        expect(dirtClearedBeforeCleaning).toEqual(0);

        let hasHooverClearedDirt = testRoom.hasBeenCleaned();
        expect(hasHooverClearedDirt).toBe(false);

        let dirtClearedAfterCleaning = testRoom.dirtCleared
        expect(dirtClearedAfterCleaning).toEqual(0);
    })
})

describe('testing creation of room with/out hoover in it', () => {
    test("tests whether a room with a hoover outside of it can be created", () => {
        let hooverCoordinates = {
            x: 10,
            y: 2
        };
        let dirtPatchesCoordinates = [];

        expect(() => {
            new Room(dimentions, dirtPatchesCoordinates, hooverCoordinates, hoover)
        }).toThrow();
    })

    test("tests whether a room with a hoover inside of it can be created", () => {
        let hooverCoordinates = {
            x: 2,
            y: 2
        };
        let dirtPatchesCoordinates = [];
        let roomWithHoover = new Room(dimentions, dirtPatchesCoordinates, hooverCoordinates, hoover)
        expect(roomWithHoover).toBeInstanceOf(Room)
    });
});

describe("Tests console.log after hoover stopped moving", () => {
    test('should display the same coordinates and no patches cleaned if hoover did not move', () => {
        global.console = {
            log: jest.fn(),
            info: jest.fn(),
            error: jest.fn()
        };

        let hooverCoordinates = {
            x: 2,
            y: 2
        };
        let dirtPatchesCoordinates = [];
        let testingRoom = new Room(dimentions, dirtPatchesCoordinates, hooverCoordinates, hoover);
        testingRoom.clean();

        expect(global.console.log).toHaveBeenCalledWith(
            hooverCoordinates.x, hooverCoordinates.y
        )
        expect(global.console.log).toHaveBeenCalledWith(
            0
        )
    });
    test('should display new coordinates after fulfilling instructions but no patches cleaned if none were met', () => {
        global.console = {
            log: jest.fn(),
            info: jest.fn(),
            error: jest.fn()
        };

        let hooverCoordinates = {
            x: 2,
            y: 2
        };
        let dirtPatchesCoordinates = [{
            x: 2,
            y: 1
        }];
        let instructions = ['N'];
        let movingHoover = new Hoover(instructions);
        let hoover = movingHoover;
        let testingRoom = new Room(dimentions, dirtPatchesCoordinates, hooverCoordinates, hoover);
        testingRoom.clean();

        expect(global.console.log).toHaveBeenCalledWith(
            hooverCoordinates.x, hooverCoordinates.y + 1
        )
        expect(global.console.log).toHaveBeenCalledWith(
            0
        )
    });
    test('should display new coordinates and detect that it cleaned a dirt patch', () => {
        global.console = {
            log: jest.fn(),
            info: jest.fn(),
            error: jest.fn()
        };

        let hooverCoordinates = {
            x: 2,
            y: 2
        };
        let dirtPatchesCoordinates = [{
            x: 2,
            y: 3
        }];
        let instructions = ['N'];
        let movingHoover = new Hoover(instructions);
        let hoover = movingHoover;
        let testingRoom = new Room(dimentions, dirtPatchesCoordinates, hooverCoordinates, hoover);
        testingRoom.clean();

        expect(global.console.log).toHaveBeenCalledWith(
            hooverCoordinates.x, hooverCoordinates.y + 1
        )
        expect(global.console.log).toHaveBeenCalledWith(
            1
        )
    });
});