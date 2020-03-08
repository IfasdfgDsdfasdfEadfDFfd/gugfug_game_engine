// import { greet } from 'wasm';
import {
  getCanvasElementById,
  getWebGLContext,
} from './core/utils';


getCanvasElementById('canvas-id')
  .width(900)
  .height(600)
  .htmlElement(el => {
    getWebGLContext(el)
      .updateClearColor(0, 0, 0, 1)
      .clear()
      .colorClearValue(console.log);
  });
