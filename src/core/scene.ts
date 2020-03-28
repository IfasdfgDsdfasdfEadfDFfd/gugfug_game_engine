type ColorType = [number, number, number, number];

class Scene {
  private gl: WebGL2RenderingContext;

  constructor(readonly name: string) {
  }

  attachContext(context: WebGL2RenderingContext): void {
    this.gl = context;
  }

  clear(color: ColorType): void {
    this.gl.clearColor(...color);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }
}


export {
  Scene,
};
