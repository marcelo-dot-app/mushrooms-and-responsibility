import * as THREE from 'three';
import Core from "../core.js";

export default class Mushroom {
  constructor() {
    this.core = new Core();
    this.scene = this.core.scene;
    this.resources = this.core.resources;

    this.resource = this.resources.items.mushroom;

    this.setModel();
  }

  setModel() {
    this.model = this.resource.scene.children[0];
    this.model.scale.set(1, 1, 1);
    this.scene.add(this.model);

    this.model.traverse((child) => {
      if (child.isMesh) {
        const box = new THREE.Box3().setFromObject(child);
        const center = box.getCenter(new THREE.Vector3().normalize());
        child.positions.sub(center);
        child.castShadow = true;
        // child.geometry.center();
      }
    });
  }
};