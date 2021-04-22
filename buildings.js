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
    this.animals = this.animals.filter((a) => a.getName() !== animal.getName());
  }

  canContain(animal) {
    return animal.getSize() < this.size;
  }
};
