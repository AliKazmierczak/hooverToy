exports.Room = class Room {
    constructor(dimentions, dirtPatchesCoordinates, hooverCoordinates, hoover) {
        this.dimentions = dimentions;
        this.dirtPatchesCoordinates = dirtPatchesCoordinates;
        this.hooverCoordinates = hooverCoordinates;
        this.hoover = hoover;
        this.dirtCleared = 0;
        if (this.isHooverInARoom(this.hooverCoordinates) == false) {
            throw 'Hoover is not in the room.'
        }
    }
    isHooverInARoom(coordinates) {
        if (coordinates.x > this.dimentions.l || coordinates.x < 0 || coordinates.y > this.dimentions.w || coordinates.y < 0) {
            return false
        }
        return true
    };
    clean() {
        try {
            while (true) {
                let newHooverCoordinates = this.hoover.followTheInstructions(this.hooverCoordinates);

                if (this.isHooverInARoom(newHooverCoordinates) == true) {
                    this.hooverCoordinates = newHooverCoordinates;
                    this.hasBeenCleaned()
                }
            }
        }
        catch (error) {
            console.log(this.hooverCoordinates.x, this.hooverCoordinates.y);
            console.log(this.dirtCleared);
        }
    };
    hasBeenCleaned() {
        for (let dirtIndex in this.dirtPatchesCoordinates) {
            let elem = this.dirtPatchesCoordinates[dirtIndex]
            let hooverX = this.hooverCoordinates.x;
            let hooverY = this.hooverCoordinates.y;
            if (elem.x === hooverX && elem.y === hooverY) {
                this.dirtPatchesCoordinates.splice(dirtIndex, 1);
                this.dirtCleared++;
                return true
            }
        }
        return false
    }
}