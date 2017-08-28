import pacman from './pacman.js';
import {setDirection, getDirection} from './direction.js'

export function keyDown(e){
  switch (e.code) {
    case 'ArrowUp':
      setDirection('up');
      break;
    case 'ArrowRight':
      setDirection('right');

      break;
    case 'ArrowDown':
      setDirection('down');

      break;
    case 'ArrowLeft':
      setDirection('left');

      break;

  }
}

export function keyUp(e){
  // setDirection(null);
}
