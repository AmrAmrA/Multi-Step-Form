class VirtualPoint {
    x: number;
    y: number;
   
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
  function logPoint(p: VirtualPoint) {
    console.log(`${p.x}, ${p.y}`);
  }
   
   
  const newVPoint = { x : 13, y : 12};
  logPoint(newVPoint);