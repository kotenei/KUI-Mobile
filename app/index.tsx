import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

class App extends Component {
  public render() {
    return <div className="test">KUI-Mobile</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
