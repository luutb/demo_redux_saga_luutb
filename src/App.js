import React from 'react';

import './App.css';
import { Provider } from 'react-redux'
import store from './core/store'
import FirstApp from './container/firstContainer'

class App extends React.Component {
  render() {
     return (
       <Provider store = {store}>
          <FirstApp></FirstApp>
       </Provider>
     );
  }
}

export default App;
