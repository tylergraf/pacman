import handleKeys from './keyHandler.js'
import pacman from './pacman.js'
export default function() {
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
  document.addEventListener('keydown', handleKeys)

}
