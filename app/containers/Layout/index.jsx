import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Gutter from './Gutter';
import Offset from './Offset';
import Flex from './Flex';
import FlexAlign from './FlexAlign';

const prefixCls='app-layout';

export default class View extends Component {
  render() {
    const header = <Header goBack>Layout 布局</Header>;
    return (
      <Page header={header} fixedHeader className={prefixCls}>
        <Block title="基础用法" bodyPadding>
          <Basic />
        </Block>
        <Block title="区块间隔" bodyPadding>
          <Gutter />
        </Block>
        <Block title="偏移" bodyPadding>
          <Offset />
        </Block>
        <Block title="Flex 布局" bodyPadding>
          <Flex />
        </Block>
        <Block title="Flex 对齐" bodyPadding>
          <FlexAlign />
        </Block>
      </Page>
    );
  }
}
