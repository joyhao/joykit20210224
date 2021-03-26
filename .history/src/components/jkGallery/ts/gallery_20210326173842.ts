import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { Scene } from 'three/src/scenes/Scene';

export class Gallery {
  constructor(selector: Element) {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    el?.appendChild(renderer.domElement);
  }
}
