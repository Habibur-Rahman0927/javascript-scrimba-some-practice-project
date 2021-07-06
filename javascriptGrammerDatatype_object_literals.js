var sales = 'Toyota';
function carTypes(name) {
    if (name === "Honda") {
        return name;
    }
    else {
        return "Sorry, we don't sell " + name + ".";
    }
}

var car = { myCar: 'Saturn', getCar: carTypes("Honda"), special: sales };
console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);
var objectCar = { manyCars: { a: 'Saab', b: 'Jeep' }, 7: "Mazda" };
console.log(objectCar.manyCars.a);
console.log(objectCar[7]);

var unusualPropertyNames = {
    '': "An empty string",
    '!': 'Bang!'
}
console.log(unusualPropertyNames['']);
console.log(unusualPropertyNames['!']);


console.log("this is Habibur\v Rahman");
var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);


