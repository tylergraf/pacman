import {keyUp, keyDown} from './keyHandler.js'
import pacman from './pacman.js'
import {setDirection, getDirection} from './direction.js'

const SPEED = 3;

export function init() {
  // The application will create a renderer using WebGL, if possible,
  // with a fallback to a canvas render. It will also setup the ticker
  // and the root stage PIXI.Container.
  const app = new PIXI.Application();

  // The application will create a canvas element for you that you
  // can then insert into the DOM.
  document.body.appendChild(app.view);

  pacman.x = app.renderer.width / 2;
  pacman.y = app.renderer.height / 2;

  // Add the pacman to the scene we are building.
  app.stage.addChild(pacman);

  // add keyboard event listeners
  document.addEventListener('keydown', keyDown);

  const ticker = new PIXI.ticker.Ticker();
  ticker.stop();
  ticker.add((deltaTime) => {
    const dir = getDirection();
    switch (dir) {
      case 'up':
        if(pacman.y > 0){
          pacman.y -= SPEED;
        }
        break;
      case 'right':
        if(pacman.x < app.renderer.width-pacman.width){
          pacman.x += SPEED;
        }
        break;
      case 'down':
        if(pacman.y < app.renderer.height-pacman.height){
          pacman.y += SPEED;
        }
        break;
      case 'left':
        if(pacman.x > 0){
          pacman.x -= SPEED;
        }
        break;
      default:

    }
  });
  ticker.start();
}
