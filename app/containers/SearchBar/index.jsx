import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import CancelButton from './CancelButton';

const prefixCls = 'app-searchbar';

export default class View extends Component {
  render() {
    const header = <Header goBack>SearchBar 搜索栏</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法" bodyPadding={false}>
          <Basic />
        </Block>
        <Block title="显示取消按钮" bodyPadding={false}>
          <CancelButton />
        </Block>
      </Page>
    );
  }
}
