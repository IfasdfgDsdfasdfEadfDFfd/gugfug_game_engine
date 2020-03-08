interface ICanvas {
  width: (w: number) => ICanvas,
  height: (h: number) => ICanvas,
  htmlElement: (f: (el: HTMLCanvasElement) => void) => ICanvas,
};


const getCanvasElementById = (id: string): ICanvas => {
  const canvasElement = <HTMLCanvasElement>document.getElementById(id);

  if (canvasElement === null) {
    console.error(`Cannot get canvas element by ${id} id`);
  }

  const htmlElement = (cb: (value: HTMLCanvasElement) => void): ICanvas => {
    cb(canvasElement);
    return canvasObject;
  }

  const width = (w: number): ICanvas => {
    canvasElement.setAttribute('width', w.toString());
    return canvasObject;
  };

  const height = (h: number): ICanvas => {
    canvasElement.setAttribute('height', h.toString());
    return canvasObject;
  };

  const canvasObject: ICanvas = {
    htmlElement,
    width,
    height,
  };

  return canvasObject;
};


export {
  getCanvasElementById,
}
