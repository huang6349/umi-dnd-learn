import { Board } from './components';

import { connect } from 'dva';

import styles from './index.css';

function IndexPage({ l1: { knightPosition }, dispatch }) {
  function handleClick(x, y) {
    dispatch({
      type: 'l1/update_state',
      payload: {
        knightPosition: [x, y],
      },
    });
  }

  return (
    <section className={styles['layout']}>
      <Board knightPosition={knightPosition} onClick={handleClick} />
    </section>
  );
}

function mapStateToProps({ l1 }) {
  return { l1 };
}

export default connect(mapStateToProps)(IndexPage);
