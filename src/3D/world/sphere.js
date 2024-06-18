import * as THREE from "three";
import Core from "../core.js";


export default class Sphere {
  constructor() {
    this.core = new Core();
    this.scene = this.core.scene;

    this.setModel();
    this.setPointLight();
  }

  setModel() {
    this.geometry = new THREE.SphereGeometry(1, 32, 32);
    this.material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.mesh.scale.set(1, 1, 1);
    this.scene.add(this.mesh);

    this.mesh.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
      }
    });
  }

  setPointLight() {
    this.pointLight = new THREE.PointLight(0xffffff, 100, 100);
    this.pointLight.position.set(3, -3, 3);
    this.pointLight.lookAt(this.mesh.position);
    this.scene.add(this.pointLight);
  }
}