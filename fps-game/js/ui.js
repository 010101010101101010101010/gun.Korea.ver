import { shop } from "./shop.js";
import { inventory } from "./inventory.js";

export function setupUI() {
  document.getElementById("aim").onclick = () => {
    if (inventory.scopes.length > 0) {
      inventory.equip(inventory.scopes[0]);
    }
  };

  document.getElementById("fire").ondblclick = () => {
    shop.buy("Red Dot");
  };
}