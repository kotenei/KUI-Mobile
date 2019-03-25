import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';

const prefixCls = 'app-tabs';

export default class View extends Component {
  render() {
    const header = <Header goBack>Tabs 标签</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法" bodyPadding={false}>
          <div style={{ background: '#fff' }}>
            <Basic />
          </div>
        </Block>
      </Page>
    );
  }
}
