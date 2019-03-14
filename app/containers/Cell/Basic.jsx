import React, { Component } from 'react';
import { Cell, CellGroup } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <CellGroup>
          <Cell title="这是标题" value="描述文字" />
          <Cell title="这是标题" value="默认显示icon" label="这是副标题" showArrow />
          <Cell title="带链接" showArrow url="http://www.baidu.com" />
        </CellGroup>
      </React.Fragment>
    );
  }
}
