exports.Room = class Room {
    constructor(dimentions,dirtPatchesCoordinates, hooverCoordinates, hoover){
        this.dimentions = dimentions;
        this.dirtPatchesCoordinates = dirtPatchesCoordinates;
        this.hooverCoordinates = hooverCoordinates;
        this.hoover = hoover;
        this.dirtCleared = 0;
        this.isHooverInARoom()
    }
    isHooverInARoom() {
        if (this.hooverCoordinates.x > this.dimentions.l || this.hooverCoordinates.y > this.dimentions.w) {
            console.error(400, 'Your imaginary hoover was never placed in the room! Simulation aborted :(');
            throw 'Hoover was not in a room'
        }
    }

}