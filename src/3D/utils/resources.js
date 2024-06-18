import * as THREE from 'three';
import { GLTFLoader } from 'three/addons';
import EventEmitter from './eventEmitter.js';

export default class Resources extends EventEmitter {
  constructor(sources) {
    super();
    this.sources = sources;
    this.items = {};
    this.toLoad = this.sources.length;
    this.loaded = 0;

    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.textureLoader = new THREE.TextureLoader();
  }

  startLoading() {
    for (const source of this.sources) {
      if (source.type === 'gltfModel') {
        this.loaders.gltfLoader.load(source.path, (file) => {
          this.loadSource(source, file);
        });

      } else if (source.type === 'texture') {
        this.loaders.textureLoader.load(source.path, (file) => {
          this.loadSource(source, file);
        });
      }

      console.log('done:', this.items);
    }
  }

  loadSource(source, file) {
    this.items[source.name] = file;
    this.loaded++;

    if (this.loaded === this.toLoad) {
      this.trigger('ready');
    }
  }
}