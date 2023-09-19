//Create Vehicle Constructor Function
function Vehicle(brand, model, speed, fuelType){
    this.brand = brand;
    this.model=  model ;
    this.speed = speed;
    this.fuelType = fuelType;
}

Vehicle.prototype.accelerate= function(){
    console.log("Vehicle accelerated..");
}
Vehicle.prototype.brake=function(){
    console.log("Brake applied...");
}
Vehicle.prototype.refuel=function(){
    console.log("Vehicle is Refueling...");
}

let vehicle1 = new Vehicle("Maruti","Dzire","155Kmph","Petrol"); 
console.log(vehicle1);
vehicle1.accelerate();
vehicle1.brake();
vehicle1.refuel();

//Create Car Constructor Function
function Car(brand, model, speed, fuelType, numberOfWheels){
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
}

Car.prototype.honk = function(){
    console.log('Honking...');
}
Object.setPrototypeOf(Car.prototype , Vehicle.prototype);

let car1 = new Car("BMW","X1","222Kmph","Petrol/Diesel",4);
console.log(car1);
car1.honk();
car1.accelerate();

//Create Airplane Contructor Function
function AirPlane (brand, model, speed, fuelType, numberOfEngines, hasLandingGear){
    Vehicle.call(this, brand, model, speed, fuelType)
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
}

AirPlane.prototype.takeOff = function (){
    console.log('The Plane is Taking Off...');
}
Object.setPrototypeOf(AirPlane.prototype, Vehicle.prototype);

let Airplane1 = new AirPlane("Air India", "A321", "833Kmph", "Jet Fuel");
console.log(Airplane1);
Airplane1.takeOff();
Airplane1.brake();