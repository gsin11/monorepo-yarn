import { combineReducers } from 'redux';
import counter3Reducer from './containers/counter/reducer';
import counter2Reducer from 'containers/counter2/reducer';

const reducers = combineReducers({
  counter2: counter2Reducer,
  counter3: counter3Reducer,
});

export default reducers;