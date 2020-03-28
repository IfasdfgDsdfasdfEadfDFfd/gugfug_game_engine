// import { greet } from 'wasm';
import { Scene } from './core';
import { Keyboard } from './events/input';


const canvas = <HTMLCanvasElement>document.getElementById('canvas-id');
canvas.width = 800
canvas.height = 600;
const webGLContext = canvas.getContext('webgl2');

const mainScene = new Scene('main');
const keyboard = new Keyboard(window);

keyboard.listen('keydown', event => {
  console.log(event);
  switch (event.key) {
    case '1':
      console.log('awesome')
      mainScene.clear([0.3, 0.3, 0.3, 1.0])
      break;
    case '2':
      mainScene.clear([0.5, 0.5, 0.5, 1.0])
      break;
    case '3':
      mainScene.clear([0.7, 0.7, 0.7, 1.0])
      break;
    case '4':
      mainScene.clear([Math.random(), Math.random(), Math.random(), 1.0])
      break;
    default:
      mainScene.clear([0.0, 0.0, 0.0, 1.0])
      break;
  }
});

mainScene.attachContext(webGLContext);
mainScene.clear([0.0, 0.0, 0.0, 1.0])
