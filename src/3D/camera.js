import * as THREE from 'three';
import Core from './core.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class Camera {
  constructor() {
    this.core = new Core();
    this.sizes = this.core.sizes;
    this.scene = this.core.scene;
    this.canvas = this.core.canvas;

    this.setInstance();
    this.setControls();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(65, this.sizes.width / this.sizes.height, 0.1, 100);
    this.instance.position.set(6, 4, 8);
    this.scene.add(this.instance);
  }

  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
  }
}
