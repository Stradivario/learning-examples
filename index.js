/* 
SQL DATABASE EXAMPLE:

name     | color | weight
Elephant | gray  | 1500
Elephant | gray  | 1500

 */

const { Animal } = require("./animal");
const { Building } = require("./buildings");
const { Stage } = require("./stage");

const zooData = [
  { name: "Elephant", color: "gray", weight: 1500, size: 1200, mana: 20 },
  { name: "Tiger", color: "pink-stripes", weight: 300, size: 400, mana: 300 },
  { name: "Monkey", color: "black", weight: 20, size: 50, mana: 10 },
  { name: "Orangutan", color: "brown", weight: 80, size: 150, mana: 80 }
];

const zoo = zooData.map(
  (c) => new Animal(c.name, { weight: c.weight, color: c.color, size: c.size, mana: c.mana })
);

const tiger = zoo.find((item) => item.name === "Tiger");
const elephant = zoo.find((item) => item.name === "Elephant");
const monkey = zoo.find((item) => item.name === "Monkey");
const orangutan = zoo.find((item) => item.name === "Orangutan");

const monkeyBuilding = new Building(200);

monkeyBuilding.addAnimal(elephant);
monkeyBuilding.addAnimal(tiger);
monkeyBuilding.addAnimal(monkey);
monkeyBuilding.addAnimal(orangutan);

let monkeyExists = monkeyBuilding.checkIfAnimalInBuilding(monkey);
console.log("Animal exists: "+monkeyExists);

let tigerExists = monkeyBuilding.checkIfAnimalInBuilding(tiger);
console.log("Animal exists: "+tigerExists);

let animalsInBuilding = monkeyBuilding.getAnimals();
for(var i=0; i<animalsInBuilding.length; i++){
  console.log(animalsInBuilding[i]);
}

tiger.eat()
console.log('[weight of animal after eating]', tiger);
tiger.shit()
console.log('[weight of animal after shiting]', tiger);

const game = new Stage();

game.addBuilding(monkeyBuilding);

console.log(game.getBuildings());
