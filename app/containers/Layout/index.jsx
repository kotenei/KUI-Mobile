import React, { Component } from 'react';
import Basic from './Basic';
import { NavLink } from 'react-router-dom';

export default class View extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" activeClassName="selected">
          To Home
        </NavLink>
      </div>
    );
  }
}
