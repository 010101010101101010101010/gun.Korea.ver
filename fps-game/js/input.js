export const input = {
  up: false,
  down: false,
  left: false,
  right: false,
  fire: false
};

export function setupInput() {
  const bind = (id, key) => {
    const btn = document.getElementById(id);
    btn.ontouchstart = btn.onmousedown = () => input[key] = true;
    btn.ontouchend = btn.onmouseup = () => input[key] = false;
  };

  bind("up", "up");
  bind("down", "down");
  bind("left", "left");
  bind("right", "right");

  const fire = document.getElementById("fire");
  fire.ontouchstart = fire.onmousedown = () => input.fire = true;
  fire.ontouchend = fire.onmouseup = () => input.fire = false;
}