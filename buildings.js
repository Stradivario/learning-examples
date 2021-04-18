module.exports.Building = class Building {
  constructor(size, animals = []) {
    this.size = size;
    this.animals = animals;
  }

  getAnimals() {
    return this.animals;
  }

  addAnimal(animal) {
    if (this.canContain(animal)) {
      this.animals.push(animal);
    } else {
      console.log("[TOO_FAT_EXCEPTION]", animal);
    }
  }

  removeAnimal(animal) {
    this.animals = this.animals.filter((a) => a.name === animal.name);
  }

  canContain(animal) {
    return animal.getWeight() < this.size;
  }
};