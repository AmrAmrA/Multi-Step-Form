class VirtualPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
function logPoint(p) {
    console.log(`${p.x}, ${p.y}`);
}
const newVPoint = { y: 1, x: 55 };
logPoint(newVPoint);
