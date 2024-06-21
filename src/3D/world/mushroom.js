import * as THREE from 'three';
import Core from "../core.js";

export default class Mushroom {
  constructor() {
    this.core = new Core();
    this.scene = this.core.scene;
    this.resources = this.core.resources;
    this.model = this.resources.items.mushroom_three;

    this.setModel();
    this.setLights();
  }

  setModel() {
    this.model = this.model.scene.children[0];
    this.model.scale.set(1, 1, 1);
    this.scene.add(this.model);

    this.model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.rotation.set(0, 0, 1);
        child.position.set(0, 0, 0);
        // child.geometry.center();
      }
    });
  }

  setLights() {
    const light = new THREE.AmbientLight(0xffffff, 2);
    light.position.set(3, 3, 3);
    this.scene.add(light);
  }
};