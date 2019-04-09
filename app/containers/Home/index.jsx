import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import { Collapse, CollapsePanel, Cell } from 'kui-mobile';

const prefixCls = 'app-home';

export default class Home extends Component {
  renderCells(source) {
    let cells = [];
    source.forEach((item, index) => {
      cells.push(<Cell key={index} to={item.to} title={item.title} border showArrow />);
    });

    return <React.Fragment>{cells}</React.Fragment>;
  }
  render() {
    const header = <Header>KUI-Mobile</Header>;
    const basic = [
      { title: 'Button 按钮', to: '/button' },
      { title: 'Cell 单元格', to: '/cell' },
      { title: 'Icon 图标', to: '/icon' },
      { title: 'Layout 布局', to: '/layout' },
    ];
    const display = [
      { title: 'Badge 徽章', to: '/badge' },
      { title: 'Collapse 折叠面板', to: '/collapse' },
      { title: 'NoticeBar 通告栏', to: '/noticebar' },
      { title: 'Tag 标签', to: '/tag' },
      { title: 'Timeline 时间轴', to: '/timeline' },
    ];
    const nav = [
      { title: 'NavBar 导航栏', to: '/navbar' },
      { title: 'Steps 步骤条', to: '/steps' },
      { title: 'TabBar 标签栏', to: '/tabbar' },
      { title: 'Tabs 标签页', to: '/tabs' },
    ];
    const feedback = [
      { title: 'Alert 警告提示', to: '/alert' },
      { title: 'Message 消息提示', to: '/message' },
      { title: 'Progress 进度条', to: '/progress' },
      { title: 'Toast 轻提示', to: '/toast' },
    ];
    const form = [{ title: 'Switch 开关', to: '/switch' }];
    return (
      <Page header={header} fixedHeader bodySpace className={prefixCls}>
        <Collapse accordion>
          <CollapsePanel header="基础组件" id="1" border={false}>
            {this.renderCells(basic)}
          </CollapsePanel>
          <CollapsePanel header="展示组件" id="2" border={false}>
            {this.renderCells(display)}
          </CollapsePanel>
          <CollapsePanel header="导航组件" id="3" border={false}>
            {this.renderCells(nav)}
          </CollapsePanel>
          <CollapsePanel header="反馈组件" id="4" border={false}>
            {this.renderCells(feedback)}
          </CollapsePanel>
          <CollapsePanel header="表单组件" id="5" border={false}>
            {this.renderCells(form)}
          </CollapsePanel>
        </Collapse>
      </Page>
    );
  }
}
