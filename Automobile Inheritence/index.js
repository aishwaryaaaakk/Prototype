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

let Car = Object.create(Vehicle.prototype);
Car.lights=function(){
    console.log("Lights are on");   
}
let car1 = new Vehicle("Toyota", "Fortuner", "190Kmph", "Diesel");
console.log(car1);
console.log(Car);
Car.lights();
Car.accelerate();
Car.brake();
Car.refuel();
