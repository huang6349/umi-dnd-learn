import * as React from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './constants';

const knightSource = {
  beginDrag(props) {
    return {};
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

@DragSource(ItemTypes.KNIGHT, knightSource, collect)
class Knight extends React.Component {
  static displayName = 'Knight';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <div
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move',
        }}
      >
        ♘
      </div>
    );
  }
}

export default Knight;
