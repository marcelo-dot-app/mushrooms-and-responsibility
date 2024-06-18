import * as THREE from 'three';

const material = new THREE.MeshBasicMaterial({});
const sphereGeometry = new THREE.TetrahedronGeometry(2);
const Sphere = new THREE.Mesh(sphereGeometry, material);

export default Sphere;
