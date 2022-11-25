import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Tile({ id, x, y, value, isMerged, isNew }) {
  return (
    <div
      key={id}
      className={cn(`tile tile-${value} tile-position-${x}-${y}`, {
        'tile-merged': isMerged,
        'tile-new': isNew,
      })}
    >
      <div className="tile-inner">{value}</div>
    </div>
  );
}

Tile.defaultProps = {
  isMerged: undefined,
  isNew: undefined,
};

Tile.propTypes = {
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  isMerged: PropTypes.bool,
  isNew: PropTypes.bool,
};

export default Tile;
