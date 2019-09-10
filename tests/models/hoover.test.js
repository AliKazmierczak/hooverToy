const { Hoover } = require("../../models/hoover");

describe('tests for hoover following instructions', () => {
    test('checking whether hoover moves upwards when instruction is N', () => {
        let instructions = ['N'];
        let testerHoover = new Hoover(instructions);

        let coordinatesAfterMove = testerHoover.followTheInstructions({
            x: 0,
            y: 0
        })
        expect(coordinatesAfterMove).toMatchObject({ x: 0, y: 1 })
    });
    test('checking whether hoover moves downwards when instruction is S', () => {
        let instructions = ['S'];
        let testerHoover = new Hoover(instructions);

        let coordinatesAfterMove = testerHoover.followTheInstructions({
            x: 0,
            y: 0
        })
        expect(coordinatesAfterMove).toMatchObject({ x: 0, y: -1 })
    });
    test('checking whether hoover moves right when instruction is E', () => {
        let instructions = ['E'];
        let testerHoover = new Hoover(instructions);

        let coordinatesAfterMove = testerHoover.followTheInstructions({
            x: 0,
            y: 0
        })
        expect(coordinatesAfterMove).toMatchObject({ x: 1, y: 0 })
    });
    test('checking whether hoover moves left when instruction is W', () => {
        let instructions = ['W'];
        let testerHoover = new Hoover(instructions);

        let coordinatesAfterMove = testerHoover.followTheInstructions({
            x: 0,
            y: 0
        })
        expect(coordinatesAfterMove).toMatchObject({ x: -1, y: 0 })
    });
    test("checking whether hoover doesn't move when there are no instructions", () => {
        let instructions = [];
        let testerHoover = new Hoover(instructions);

        expect(() => { testerHoover.followTheInstructions({ x: 0, y: 0 }) }).toThrow();
    });
    test("does instructions only once and throws exception afterwards", () => {
        let instructions = ["N", "W"];
        let testerHoover = new Hoover(instructions);

        let coordinatesAfterMovingN = testerHoover.followTheInstructions({
            x: 0,
            y: 0
        });
        expect(coordinatesAfterMovingN).toMatchObject({ x: 0, y: 1 });
        let coordinatesAfterMovingW = testerHoover.followTheInstructions({
            x: 0,
            y: 0
        });
        expect(coordinatesAfterMovingW).toMatchObject({ x: -1, y: 0 });
        expect(() => { testerHoover.followTheInstructions({ x: 0, y: 0 }) }).toThrow();
    });
})