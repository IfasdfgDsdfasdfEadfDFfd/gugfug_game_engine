type vec4d = [number, number, number, number];
type WebGLVerson = ('webgl' | 'webgl2');

interface IWebGLContext {
  updateClearColor: (...colors: vec4d) => IWebGLContext,
  clear: () => IWebGLContext,
  colorClearValue: (f: (value: vec4d) => void) =>  IWebGLContext,
};


const getWebGLContext = (canvasElement: HTMLCanvasElement, version: WebGLVerson = 'webgl2'): IWebGLContext => {
  const ctx = <WebGL2RenderingContext>canvasElement.getContext(version);

  const updateClearColor = (...colors: vec4d): IWebGLContext => {
    ctx.clearColor(...colors);
    return ctxObject;
  }

  const clear = (): IWebGLContext => {
    ctx.clear(ctx.COLOR_BUFFER_BIT);
    return ctxObject;
  };

  const colorClearValue = (cb: (value: vec4d) => void): IWebGLContext => {
    const value: vec4d = ctx.getParameter(ctx.COLOR_CLEAR_VALUE);
    cb(value);
    return ctxObject;
  }

  const ctxObject: IWebGLContext = {
    updateClearColor,
    clear,
    colorClearValue,
  };

  return ctxObject;
};


export {
  getWebGLContext,
};
