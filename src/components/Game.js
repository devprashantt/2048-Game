import React, { useState } from 'react';
import times from 'lodash/times';
import PropTypes from 'prop-types';
import { MAX_POS } from '../constant';
import { getInitTileList } from '../utils/tile';
import useMoveTile from '../hooks/useMoveTile';
import Tile from './Tile';

function Game({ setScore }) {
  const [tileList, setTileList] = useState(getInitTileList);
  useMoveTile({ tileList, setTileList, setScore });
  return (
    <div className="game-container">
      <div className="grid-container">
        {times(MAX_POS, (index) => (
          <div key={index} className="grid-row">
            {times(MAX_POS, (index2) => (
              <div key={index2} className="grid-cell" />
            ))}
          </div>
        ))}
      </div>
      <div className="tile-container">
        {tileList.map((item) => (
          <Tile key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

Game.propTypes = {
  setScore: PropTypes.func.isRequired,
};

export default Game;
