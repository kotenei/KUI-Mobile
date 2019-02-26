import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/Layout';

import './index.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
