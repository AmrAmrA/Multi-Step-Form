var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
var newVPoint = { x: 13, y: 12 };
logPoint(newVPoint);
