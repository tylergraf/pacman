import pacman from './pacman.js';

export default function(e){
  switch (e.code) {
    case 'ArrowUp':
      pacman.y -= 20;
      break;
    case 'ArrowRight':
      pacman.x += 20;

      break;
    case 'ArrowDown':
      pacman.y += 20;

      break;
    case 'ArrowLeft':
      pacman.x -= 20;

      break;

  }
}
