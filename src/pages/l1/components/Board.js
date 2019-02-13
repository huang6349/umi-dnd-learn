import * as React from 'react';
import * as PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Knight from './Knight';
import BoardSquare from './Board.Square';

import styles from './Board.css';

@DragDropContext(HTML5Backend)
class Board extends React.Component {
  static displayName = 'Board';

  static propTypes = {
    knightPosition: PropTypes.array.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    knightPosition: [0, 0],
  };

  constructor(props) {
    super(props);

    this._renderSquare = this._renderSquare.bind(this);
    this._renderPiece = this._renderPiece.bind(this);
    this.state = {};
  }

  render() {
    const { knightPosition } = this.props;

    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this._renderSquare(i, knightPosition));
    }

    return <div className={styles['layout']}>{squares}</div>;
  }

  _renderSquare(i, knightPosition) {
    const { onClick } = this.props;

    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare x={x} y={y} onClick={onClick}>
          {this._renderPiece(x, y, knightPosition)}
        </BoardSquare>
      </div>
    );
  }

  _renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
      return <Knight />;
    }
  }
}

export default Board;
