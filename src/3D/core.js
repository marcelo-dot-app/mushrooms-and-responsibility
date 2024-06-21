import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Sizes from "./utils/sizes.js";
import Time from "./utils/time.js";
import Resources from "./utils/resources.js";
import sources from "./sources.js";
import Camera from "./camera.js";
import Renderer from "./renderer.js";
import Mushroom from "./world/mushroom.js";
import Sphere from "./world/sphere.js";

let instance = null;

export default class Core {
  constructor(_canvas) {
    if (instance) return instance; // Singleton
    instance = this;

    window.core = this;
    this.canvas = _canvas;

    this.sizes = new Sizes();
    this.time = new Time();
    this.resources = new Resources(sources);
    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    // const axesHelper = new THREE.AxesHelper(5);
    // this.scene.add(axesHelper);

    this.resources.on('ready', () => {
      this.mushroom = new Mushroom();
    });

    this.sizes.on('resize', () => {
      this.resize();
    });

    this.time.on('tick', () => {
      this.camera.update();
      this.renderer.update();

      if (this.resources.loaded) {
        this.mushroom.model.rotation.z += 0.01;
      }
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }
}
