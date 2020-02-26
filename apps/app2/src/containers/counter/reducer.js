import { COUNTER_DECREMENT, COUNTER_INCREMENT } from './constants';

let initialState = {
  count3: 0,
}

const countReducer = function (state = initialState, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count3: state.count3 + 1,
      };
    case COUNTER_DECREMENT:
      return {
        ...state,
        count3: state.count3 - 1,
      };
    default:
      return state;
  }
};

export default countReducer;