import * as THREE from 'three';
import Core from "../core.js";

export default class Mushroom {
  constructor() {
    this.core = new Core();
    this.scene = this.core.scene;
    this.resources = this.core.resources;
    this.time = this.core.time;

    this.resource = this.resources.items.mushroom;

    this.setModel();
  }

  setModel() {
    this.model = this.resource.scene;
    this.model.scale.set(1, 1, 1);
    this.scene.add(this.model);

    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
      }
    });
  }
};