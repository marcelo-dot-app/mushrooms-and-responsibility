import * as THREE from 'three';
import Core from "../core.js";

export default class Mushroom {
  constructor() {
    this.core = new Core();
    this.scene = this.core.scene;

    this.setModel();
  }

  setModel() {
    this.geometry = new THREE.TetrahedronGeometry(1, 0);
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.model = new THREE.Mesh(this.geometry, this.material);
    this.model.scale.set(1, 1, 1);
    this.scene.add(this.model);

    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
      }
    });
  }
};