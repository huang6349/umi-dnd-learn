import * as React from 'react';
import * as PropTypes from 'prop-types';

class Square extends React.Component {
  static displayName = 'Square';

  static propTypes = {
    black: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    black: false,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { black, children } = this.props;

    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';
    return (
      <div
        style={{
          backgroundColor: fill,
          color: stroke,
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    );
  }
}

export default Square;
