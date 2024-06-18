import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Mushroom from "./meshes/mushroom.js";

const x = Mushroom;

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, sizes.width / sizes.height);
camera.position.z = 5;
scene.add(camera);

const controls = new OrbitControls(camera, canvas, {
  enableDamping: true,
  enabled: true,
});

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// lights
const ambientLight = new THREE.AmbientLight(0x404040, 1);

scene.add(ambientLight);
// scene.add(Sphere);
console.log('Mushroom?', Mushroom ? 'yes' : 'no');
scene.add(Mushroom);


const clock = new THREE.Clock();

const animate = () => {
  clock.getElapsedTime();
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};

animate();
