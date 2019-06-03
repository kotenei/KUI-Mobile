import React, { Component } from 'react';
import { PullRefresh, CellGroup, Cell } from 'kui-mobile';

export default class Demo extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.init();
  }
  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <PullRefresh
          // onPullingUp={this.onPullingUp}
          style={{
            height: '500px',
            overflow: 'hidden',
            position: 'relative',
            background: '#fff',
          }}
          onPullingDown={this.onPullingDown}
        >
          <CellGroup>
            {data.map((item, index) => {
              return <Cell key={index} title={`item ${index}`} />;
            })}
          </CellGroup>
        </PullRefresh>
      </React.Fragment>
    );
  }
  init() {
    this.onPullingUp();
  }
  onPullingDown(callback) {
    setTimeout(() => {
      callback('success');
    }, 2000);
  }
  onPullingUp = callback => {
    // 模拟更新数据
    setTimeout(() => {
      const { data } = this.state;
      let last = data.length > 0 ? data[data.length - 1] : 0;
      for (let i = 1; i <= 20; i++) {
        data.push(last + i);
      }
      this.setState(
        {
          data,
        },
        callback,
      );
    }, 2000);
  };
}
