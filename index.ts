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

const newVPoint: VirtualPoint = { y: 1, x: 55 };
logPoint(newVPoint);

let arr: string[];

const newArray: typeof arr = ["hello", "World", "Everybody"]; 

interface myObject {first : string, lastName ? : string}

const newMyObject: myObject = {first : "Amir"}

console.log(newMyObject.first, newMyObject.lastName);