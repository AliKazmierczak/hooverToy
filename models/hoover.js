exports.Hoover = class Hoover {
    constructor(instructions){
        this.instructions = instructions
        // this.followTheInstructions() = followTheInstructions()
    }

    followTheInstructions(currentCoordinates){
        if (this.instructions.length == 0){
            throw 'This hoover did not receive any instructions'
        }

        for (let elem of this.instructions) {
            let newX = currentCoordinates.x
            let newY = currentCoordinates.y
            if (elem === 'N') {
                newY = newY + 1
            }
            if (elem === 'S') {
                newY = newY - 1
            }
            if (elem === 'E') {
                newX = newX + 1
            }
            if (elem === 'W') {
                newX = newX - 1
            }
            this.instructions.shift()
            return {
                x: newX,
                y: newY
            }
        }
    }
}