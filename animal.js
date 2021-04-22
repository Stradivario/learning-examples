module.exports.Animal = class Animal {
  constructor(name, config) {
    this.name = name;
    this.config = config;
  }

  move() {}

  sleep() {}

  getUp() {}

  shit() {
    this.config.weight -= 10;
   }

  piss() {}

  eat() { 
    this.config.weight += 20;
  }

  fight(animal) {
    return (
      this.getWeight() > animal.getWeight() || this.getMana() > animal.getMana()
    );
  }

  getWeight() {
    return this.config.weight;
  }

  getMana() {
    return this.config.mana;
  }

  getName() {
    return this.name;
  }

  getSize() {
    return this.config.size;
  }
};
