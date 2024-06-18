import * as THREE from 'three';
import { GLTFLoader } from "three/addons";
import { scene } from "../core.js";


const gltfLoader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();

const mushroomTexture = textureLoader.load('/mushroom/textures/gymn_baseColor.jpeg',
  () => {},
  () => {},
  (e) => console.log("Error loading mushroom texture.", e)
);
mushroomTexture.colorSpace = THREE.SRGBColorSpace;

let mushroomScene = null;

gltfLoader.load('/mushroom/scene.gltf',
  (gltf) => {
    console.log('Mushroom scene loaded.', gltf);
    gltf.scene.scale.set(2, 2, 2);
    mushroomScene = gltf.scene.children[0];
    // mushroomScene = gltf.scene;
  },
  () => {},
  (e) => console.log('Error loading mushroom scene.', e)
);

console.log('Mushroom JS?', mushroomScene ? 'Yes' : 'No');

export default mushroomScene;
