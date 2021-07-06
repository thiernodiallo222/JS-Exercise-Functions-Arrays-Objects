// ⭐️ Example Challenge start ⭐️

/**
 * ### Challenge `exampleFunction`
 * 
 * @instructions
 * This function should be able to take two numbers as arguments
 * and return the result of adding them up.
 * 
 * For example, if we invoke `exampleFunction` passing 5 and 3,
 * the returned value should be 8.
*/
function exampleFunction(num1, num2) {
  return num1 + num2;
}

// ⭐️ Example Challenge end ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/**
 * ### Challenge `makePersonObject`
 * 
 * @instructions
 * This function should take an id, a name and an email as arguments,
 * and return an object with `id`, `name` and `email` properties.
 * 
 * For example, if we invoke `makePersonObject`
 * passing 5, 'Leia' and 'leia@leia.com' as arguments,
 * the returned value should look like:
 * {
 *   id: 5,
 *   name: "Leia",
 *   email: "leia@leia.com",
 * }
*/
function makePersonObject(id, name, email) {
  return {
    id: id,
    name: name,
    email: email
  };
}


/**
 * ### Challenge `getName`
 * 
 * @instructions
 * This function takes as its only argument
 * an object containing a `name` property,
 * and return a string that reads `Hello, my name is {name}`,
 * where `{name}` is the name stored in the object.
 * 
 * For example, if we invoke `getName`
 * passing { id: 1, name: 'Leia', email: 'leia@leia.com` } as the argument,
 * the returned value should look like `Hello, my name is Leia`.
*/
function getName(myObject) {
<<<<<<< HEAD
  return `Hello, my name is ${ myObject.name }`;
=======
  return 'Hello, my name is ${ myObject.name }';
>>>>>>> 81765641198866bf1d24af5b9abee0a8b521cb65

}

/**
 * ### Challenge `makeSmartPerson`
 * 
 * @instructions
 * This function takes a single `name` argument and returns an object.
 * The returned object has the following characteristics:
 *     It has a `name` property that contains the argument passed in.
 *     It has a `sum` method that takes two numbers as arguments
 *         and returns the result of adding them together.
 *     It has a `speak` method that takes no arguments
 *         and returns a string like `Hello, my name is {name}`.
 *         where `{name}` is the name passed into `makeSmartPerson`.
*/
function makeSmartPerson(name) {
  return {
    name: name,
    sum: function (a, b) {
      return a + b;
    },
    speak: function () {
<<<<<<< HEAD
      return `Hello, my name is ${name}`;
=======
      return 'Hello, my name is ${name}';
>>>>>>> 81765641198866bf1d24af5b9abee0a8b521cb65
    }
  };
}

/**
 * ### Challenge `getCarInfoByIndex`
 * 
 * @instructions
 * getCarInfoByIndex takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired index in the array.
 * getCarInfoByIndex returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoByIndex is invoked with the inventory and the number 0,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoByIndex(arr, index) {
<<<<<<< HEAD
  // const cars = arr;
  return `This is a ${arr[index].car_make} ${arr[index].car_model}`;
=======
  const cars = arr;
  const theCar = cars[index];
  return 'This is a {theCar.car_make} {theCar.car_model}';
>>>>>>> 81765641198866bf1d24af5b9abee0a8b521cb65
}

/**
 * ### Challenge `getLastCarInfo`
 * 
 * @instructions
 * getLastCarInfo takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getLastCarInfo returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getLastCarInfo is invoked passing the inventory inside /data/inventory.js,
 * it will return `This is a Lincoln Town Car`.
*/
function getLastCarInfo(arr) {
<<<<<<< HEAD
 
  const lastCar = arr[arr.length - 1];
  return `This is a ${lastCar.car_make} ${lastCar.car_model}`;
=======
  const allCars = array;
  const lastCar = allCars[allCars.length - 1];
  return 'This is a ${lastCar.car_make} ${lastCar.car_model}';
>>>>>>> 81765641198866bf1d24af5b9abee0a8b521cb65

}

/**
 * ### Challenge `getCarInfoById`
 * 
 * @instructions
 * getCarInfoById takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired car id (see how each car has its own unique id).
 * getCarInfoById returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoById is invoked with the inventory and the number 1,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoById(arr, myId) {
<<<<<<< HEAD
  // const CarsArray = arr;
 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === myId) {
      return `This car is a ${arr[i].car_make} ${arr[i].car_model}`;
    }
  }
=======
  const CarsArray = arr;
 
  for (let i = 0; i < theCars.length; i++){
    if (carsArray[i].id != myId) {
      //do nothing 
      // will continue to loop through the array
    } 
  return 'This car is a ${carsArray[i].car_make} ${carsArray[i].car_model}';

>>>>>>> 81765641198866bf1d24af5b9abee0a8b521cb65
}
/**
 * ### Challenge `sortCarInventory`
 * 
 * @instructions
 * sortCarInventory takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * sortCarInventory returns an inventory that is sorted by car_model, ascending [A-Z].
*/
<<<<<<< HEAD
  function sortCarInventory(arr) {
  
    arr.sort((a, b) => (a.car_model > b.car_model) ? 1 : -1)
  
    return arr;
=======
function sortCarInventory(arr) {
  const carsArray = arr;
  for (let i = 0; i < carrsArray.length - 1; i++){
    for (let k = i+1; k <carrsArray.length; k++) {
      if (carsArray[i].car_model.charAt(0) <= carsArray[k].car_model.charAt(0)) {
        //do nothing
      } 
      const temp = carsArray[i];
      carsArray[i] = carsArray[k];
      carsArray[k] = temp;
    }
  }
  return carsArray
>>>>>>> 81765641198866bf1d24af5b9abee0a8b521cb65
}

/**
 * ### Challenge `getModelYears`
 * 
 * @instructions
 * We need the years from every car in the inventory!
 * getModelYears takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getModelYears returns an array containing all the 'car_year's in the inventory.
*/
function getModelYears(arr) {
/* code here */
  const cars = arr;
  for (let i = 0; i < cars.length; i++){
    cars[i] = cars[i].car_year;
  }
  return cars
}

/**
 * ### Challenge `getOlderCars`
 * 
 * @instructions
 * We need a utility to find older cars!
 * getOlderCars takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired max year.
 * getOlderCars returns an array containing all the cars
 * with a `car_year` which is at most the given desired max year,
 * in the same order as they appear in the original inventory.
*/
function getOlderCars(arr, year) {
  const cars = arr;
  for (let i = 0; i < cars.length; i++){
    if (cars.car_year > year) {
      //do nothing
    }
    cars.push(cars[i]);
  }
  return cars
}

/**
 * ### Challenge `getGermanCars`
 * 
 * @instructions
 * We need a utility to find German cars!
 * getGermanCars takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getGermanCars returns an array containing all the cars
 * made by either `Audi` or `Mercedes-Benz` or `Volkswagen` or `BMW`,
 * in the same order as they appear in the original inventory.
*/
function getGermanCars(arr) {
/* code here */
  const cars = arr;
  for (let i = 0; i < cars.length; i++){
    if (cars[i].car_make != 'Audi' || cars[i].car_make != 'Mercedes-Benz' || cars[i].car_make != 'Volkswagen' || cars[i].car_make != 'BMW') {
      //do nothing 
    }// else
    cars.push(cars[i]);

  }
  return cars;
}

/**
 * ### Challenge refactor to arrow functions
 * 
 * @instructions
 * Create arrow function versions of the following commented-out functions:
 * 
 * const sum = function (a, b) {
 *   return a + b
 * }
 * 
 * const addFive = function(num) {
*    return num + 5
 * }
 *
 * const argTimesTwo = function (num) {
 *   return num * 2
 * }
*/
    

const sum = (a, b) => {
    return a + b
}
  
const addFive = (num) => {
    return num + 5
}
  
const argTimesTwo = (num) => {
    return num * 2
}

/**
 * ### Challenge `carMaker`
 * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * This function takes a single odometer argument (a number) and returns an object.
 * The returned object has the following characteristics:
 *     it has an `odometer` property that contains the argument passed in.
 *     it has a `drive` method that takes a distance as its argument, and
 *         (1) causes the odometer in the object to be increased by the distance,
 *         (2) returns the updated value of the `odometer`.
*/
function carMaker(/* code here */) {
  /* code here */
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (exampleFunction) { module.exports.exampleFunction = exampleFunction }
  if (makePersonObject) { module.exports.makePersonObject = makePersonObject }
  if (getName) { module.exports.getName = getName }
  if (makeSmartPerson) { module.exports.makeSmartPerson = makeSmartPerson }
  if (carMaker) { module.exports.carMaker = carMaker }
  if (getCarInfoByIndex) { module.exports.getCarInfoByIndex = getCarInfoByIndex }
  if (getLastCarInfo) { module.exports.getLastCarInfo = getLastCarInfo }
  if (getCarInfoById) { module.exports.getCarInfoById = getCarInfoById }
  if (sortCarInventory) { module.exports.sortCarInventory = sortCarInventory }
  if (getModelYears) { module.exports.getModelYears = getModelYears }
  if (getOlderCars) { module.exports.getOlderCars = getOlderCars }
  if (getGermanCars) { module.exports.getGermanCars = getGermanCars }
  if (sum) { module.exports.sum = sum }
  if (addFive) { module.exports.addFive = addFive }
  if (argTimesTwo) { module.exports.argTimesTwo = argTimesTwo }
}
