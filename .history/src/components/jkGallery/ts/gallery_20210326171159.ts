import { Scene } from 'three/src/scenes/Scene';

export class Gallery {
  constructor() {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    console.log(scene);
  }
}
