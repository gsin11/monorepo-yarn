import { createStore } from 'redux';
import countReducer from './containers/counter/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(countReducer, composeWithDevTools());

export default store;