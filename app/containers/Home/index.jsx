import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavLink to="/Layout" activeClassName="selected">
          To Layout
        </NavLink>
      </div>
    );
  }
}
