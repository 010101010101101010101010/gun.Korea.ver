import { inventory } from "./inventory.js";

export let money = 500;

export const shop = {
  scopes: {
    "Red Dot": 100,
    "2x Scope": 250,
    "4x Scope": 500
  },

  buy(scope) {
    const price = this.scopes[scope];
    if (money >= price) {
      money -= price;
      inventory.addScope(scope);
      return true;
    }
    return false;
  }
};