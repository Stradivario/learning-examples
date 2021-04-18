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
      this.getWeight() > animal.getWeight() || this.getMana() > animal.getMana()
    );
  }

  getWeight() {
    return this.config.weight;
  }

  getMana() {
    return this.config.weight;
  }

  getName() {
    return this.name;
  }
};
