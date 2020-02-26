import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducer'
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from './constants';

class Page extends React.PureComponent {
  constructor(props) {
    super(props)
    this.store = createStore(reducer)
  }

  render() {
    const { value, decrement, increment } = this.props;
    return (
      <Provider store={this.store}>
        <div>
          <h1>{value}</h1>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrease</button>
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.count2
  };
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: COUNTER_INCREMENT }),
    decrement: () => dispatch({ type: COUNTER_DECREMENT })
  }
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Page);

export default Container;