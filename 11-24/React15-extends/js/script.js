// function Car(color, name, tair) {
//   this.color = color;
//   this.name = name;
//   this.tair = tair;
// }

// let farrari = new Car("red", "renzo", "4");
// let bugatti = new Car("balck", "divo", "4");

// console.log(farrari);
// console.log(bugatti);

//////////////////////////////////////////////////////////////////////////////////////////
class Car {
  constructor(color, name, tair) {
    this.color = color;
    this.name = name;
    this.tair = tair;
  }
  speedRun() {
    console.log(this.name + " it moving");
  }
}

class Truck extends Car {
  constructor(color, name, tair, maxBar) {
    super(color, name, tair);
    this.mxmaxBar = maxBar;
  }
  speedRun() {
    // console.log( "Truck "+this.name + " it moving");
    super.speedRun();
  }
}

let farrari = new Car("red", "renzo", "4");
let bugatti = new Car("balck", "divo", "4");

let manTruck = new Truck("white", "CQ3", 10, 60000);

console.log(farrari);
console.log(bugatti);
console.log(manTruck);
manTruck.speedRun();
