// import { greet } from 'wasm';
import { Keyboard } from './events/input';
import { createViewportById } from './core';



const viewport = createViewportById('canvas-id');
viewport.resize(window.innerWidth, window.innerHeight);

const mainScene = viewport.createScene('main');
mainScene.clear([1.0, 1.0, 1.0, 1.0]);

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
