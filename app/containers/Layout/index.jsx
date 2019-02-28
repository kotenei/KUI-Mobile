import React, { Component } from 'react';
import Basic from './Basic';
import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import Header from '../../components/Header';

export default class View extends Component {
  render() {
    return (
      <Page style={{ background: 'green' }}>
        <NavLink to="/">To Home</NavLink>
      </Page>
    );
  }
}
