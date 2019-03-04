import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';

const prefixCls = 'app-home';

export default class Home extends Component {
  render() {
    const header = <Header>KUI-Mobile</Header>;
    return (
      <Page header={header} fixedHeader>
        <NavLink to="/layout">Layout</NavLink>
      </Page>
    );
  }
}
