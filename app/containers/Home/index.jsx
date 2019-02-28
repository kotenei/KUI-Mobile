import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import Header from '../../components/Header';

export default class Home extends Component {
  render() {
    return (
      <Page header={<Header>KUI-Mobile</Header>} style={{ background: 'red', height: '100%' }}>
        <NavLink to="/Layout">Layout</NavLink>
      </Page>
    );
  }
}
