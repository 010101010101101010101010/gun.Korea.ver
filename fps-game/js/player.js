import { GUNS } from "./guns.js";

export class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.speed = 4;
    this.gun = GUNS.pistol;
  }

  shoot() {
    return this.gun.damage;
  }
}