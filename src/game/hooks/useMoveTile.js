import { useEffect } from 'react';
import { addKeyObserver, removeKeyObserver } from '../utils/keyboard';
import { makeTile, moveTile } from '../utils/tile';

function useMoveTile({ tileList, setTileList, setScore }) {
  function moveAndAdd({ x, y }) {
    const newTileList = moveTile({ tileList, x, y });
    const score = newTileList.reduce((acc, item) => (item.isMerged ? acc + item.value : acc), 0);
    setScore((v) => v + score);
    const newTile = makeTile(newTileList);
    newTile.isNew = true;
    newTileList.push(newTile);
    setTileList(newTileList);
  }

  function moveUp() {
    moveAndAdd({ x: 0, y: -1 });
  }
  function moveDown() {
    moveAndAdd({ x: 0, y: 1 });
  }
  function moveLeft() {
    moveAndAdd({ x: -1, y: 0 });
  }
  function moveRight() {
    moveAndAdd({ x: 1, y: 0 });
  }
  useEffect(() => {
    addKeyObserver('up', moveUp);
    addKeyObserver('down', moveDown);
    addKeyObserver('left', moveLeft);
    addKeyObserver('right', moveRight);
    return () => {
      removeKeyObserver('up', moveUp);
      removeKeyObserver('down', moveDown);
      removeKeyObserver('left', moveLeft);
      removeKeyObserver('right', moveRight);
    };
  });
}

export default useMoveTile;
