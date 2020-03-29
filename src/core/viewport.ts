import { Scene } from "./scene";


interface Viewport {
  resize(width: number, height: number): void;
  createScene(name: string): Scene;
}


class ViewportImpl implements Viewport {
  private gl: WebGL2RenderingContext;
  private scenes: Array<Scene>;

  constructor(readonly canvas: HTMLCanvasElement) {
    this.gl = canvas.getContext('webgl2');
    this.scenes = [];
  }

  createScene(name: string): Scene {
    const scene = new Scene(name, this.gl)
    this.scenes.push(scene);
    return scene;
  }

  resize(width: number, height: number): void {
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height= `${height}px`;

    this.canvas.width = width;
    this.canvas.height = height;

    this.gl.viewport(0, 0, width, height);
  }
}


const createViewportById = (canvasId: string): Viewport => {
  const canvas = <HTMLCanvasElement>document.getElementById(canvasId);
  return new ViewportImpl(canvas);
}


export {
  Viewport,
  createViewportById,
}
