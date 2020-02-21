import React from 'react';
import logo from './logo.svg';
import logoRedux from './logo-redux.svg';
import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import CounterContainer from './containers/counter';
import Counter2 from 'containers/counter2';
import store from './store';

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="react logo" />
          <img src={logoRedux} className="App-logo" alt="redux logo" />
        </header>
        <main>
          <CounterContainer />
          <Counter2/>
        </main>
      </div>
    </ReduxProvider>
  );
}

export default App;
