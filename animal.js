module.exports.Animal = class Animal {
  constructor(name, config) {
    this.name = name;
    this.config = config;
  }

  move() {}

  sleep() {}

  getUp() {}

  shit() {}

  piss() {}

  eat() {}

  fight(animal) {
    return (
      this.config.weight > animal.config.weight ||
      this.config.mana > animal.config.mana
    );
  }

  getWeight() {
    return this.config.weight;
  }
};
