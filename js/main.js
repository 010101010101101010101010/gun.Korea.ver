import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.152/build/three.module.js";
import { Glock } from "./glock.js";
import { createDummy } from "./dummy.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,100);
camera.position.y = 1.6;

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(innerWidth,innerHeight);
document.body.appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xffffff,0x444444,1));

const grid = new THREE.GridHelper(20,20);
scene.add(grid);

const listener = new THREE.AudioListener();
camera.add(listener);

const gun = new Glock(camera,listener);

const dummy = createDummy();
scene.add(dummy);

const raycaster = new THREE.Raycaster();

window.addEventListener("click",()=>{
  gun.shoot(raycaster,[dummy]);
});

function loop(){
  renderer.render(scene,camera);
  requestAnimationFrame(loop);
}
loop();