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
  { name: "Elephant", color: "gray", weight: 1500, mana: 20 },
  { name: "Tiger", color: "yellow-stripes", weight: 300, mana: 300 },
  { name: "Monkey", color: "black", weight: 20, mana: 1 },
];

const zoo = zooData.map(
  (c) => new Animal(c.name, { weight: c.weight, color: c.color, mana: c.mana })
);

const tiger = zoo.find((item) => item.name === "Tiger");
const elephant = zoo.find((item) => item.name === "Elephant");
const monkey = zoo.find((item) => item.name === "Monkey");

const monkeyBuilding = new Building(200);

monkeyBuilding.addAnimal(elephant);
monkeyBuilding.addAnimal(tiger);
monkeyBuilding.addAnimal(monkey);

const game = new Stage();

game.addBuilding(monkeyBuilding);

console.log(game.getBuildings());
