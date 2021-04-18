module.exports.Stage = class Stage {
  constructor() {
    this.buildings = [];
  }

  addBuilding(building) {
    this.buildings.push(building);
  }

  getBuildings() {
    return this.buildings;
  }
};
