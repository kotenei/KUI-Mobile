import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Desc from './Desc';
import Disabled from './Disabled';

const prefixCls = 'app-icon';

export default class View extends Component {
  render() {
    const header = <Header goBack>Radio 单选框</Header>;
    return (
      <Page header={header} fixedHeader className={prefixCls}>
        <Block title="基础用法" bodyPadding={false}>
          <Basic />
        </Block>
        <Block title="带描述" bodyPadding={false}>
          <Desc />
        </Block>
        <Block title="禁用" bodyPadding={false}>
          <Disabled />
        </Block>
      </Page>
    );
  }
}
