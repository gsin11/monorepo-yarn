import { connect } from 'react-redux';
import Component from '../../components/counter';
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from './constants';

const mapStateToProps = state => {
  return {
    data: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: COUNTER_INCREMENT }),
    handleDecrementClick: () => dispatch({ type: COUNTER_DECREMENT })
  }
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;